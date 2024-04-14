export default function Winner({ winner }) {

  return (
    <div className="winnerCard">
      <h1>Winner</h1>
      <img className="profileIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
      <div className="winner-details">
        <h4 >{winner.first_name} {winner.last_name}</h4>
        <p>{winner.email}</p>
        <p># {winner.id}</p>
        <p>{winner.phone}</p>
        <p>
          Registered on : {new Date(winner.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  )
}
