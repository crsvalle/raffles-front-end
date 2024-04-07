import { useParams } from "react-router-dom"
import Signup from "../Components/Signup"

export default function Raffle() {
  let id = useParams()
  return (
    <div>
      <Signup id={id.id}/>
      
    </div>
  )
}
