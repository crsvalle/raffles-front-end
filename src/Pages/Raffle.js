import { useParams } from "react-router-dom"
import Signup from "../Components/Signup"
import Participants from "../Components/Participants"

export default function Raffle() {
  let id = useParams()
  
  return (
    <div>
      <Signup id={id.id}/>
      <Participants id={id.id}/>
    </div>
  )
}
