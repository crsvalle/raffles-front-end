import { useParams } from "react-router-dom"
import Signup from "../Components/Signup"
import Participants from "../Components/Participants"
import EndRaffle from "../Components/EndRaffle"
import { useState } from "react"

export default function Raffle() {
  let id = useParams()
  const [participants, setParticipants] = useState([]);
  return (
    <div>
      <Signup id={id.id} participants={participants} setParticipants={setParticipants}/>
      <Participants id={id.id} participants={participants} setParticipants={setParticipants}/>
      <EndRaffle id={id.id}/>
    </div>
  )
}
