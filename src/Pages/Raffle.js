import { useParams } from "react-router-dom"
import Signup from "../Components/Signup"
import Participants from "../Components/Participants"
import EndRaffle from "../Components/EndRaffle"
import { useEffect, useState } from "react"
import Winner from "../Components/Winner"
import Navbar from "../Components/Navbar"

const API_URL = process.env.REACT_APP_API_URL;
export default function Raffle() {
  let id = useParams();
  const [participants, setParticipants] = useState([]);
  const [raffle, setRaffle] = useState(null);
  const [winner, setWinner] = useState([])
  const [activeComponent, setActiveComponent] = useState(() => {
    return localStorage.getItem('activeComponent') || 'signup';
  });

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}/raffles/${id.id}`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      setRaffle(data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function fetchWinner() {
    try {
      const response = await fetch(`${API_URL}/raffles/${id.id}/winner`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      setWinner(data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
    fetchWinner();
  }, []);

  useEffect(() => {
    localStorage.setItem('activeComponent', activeComponent);
  }, [activeComponent]);
  

  return (
    <div>
      <h1>{raffle?.name}</h1>
      <Navbar setActiveComponent={setActiveComponent} />

      {activeComponent === 'signup' && <Signup id={id.id} participants={participants} setParticipants={setParticipants} />}
      {activeComponent === 'participants' && <Participants id={id.id} participants={participants} setParticipants={setParticipants} />}
      {(activeComponent === 'winner' && raffle !== null && raffle.winner_id !== null) && (
        <Winner winner={winner} />
      )}
      {(activeComponent === 'winner' && (raffle === null || raffle.winner_id === null)) && (
        <EndRaffle id={id.id} />
      )}
    </div>
  )
}
