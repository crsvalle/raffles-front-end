import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export default function Winner({ id }) {
  const [winner, setWinner] = useState([])

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}/raffles/${id}/winner`);
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
  }, []);

  return (
    <div className="winnerCard">
      <img className="profileIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
      <div>
        <h4>{winner.first_name} {winner.last_name}</h4>
        <p>{winner.email}</p>
        <p># {winner.id}</p>
        <p>{winner.phone}</p>
      </div>
    </div>
  )
}
