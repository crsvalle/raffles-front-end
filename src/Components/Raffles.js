export default function Raffles({raffle}) {
  return (
    <div>
        <h3>{raffle.name}</h3>
        <p>created at:  {raffle.created_at}</p>
        {raffle.ended ? 'This raffle is done' : 'this raffle is ongoing'}
        <p>Winner Id: {raffle.winner_id? raffle.winner_id: "No winner yet"}</p>
    </div>
  )
}
