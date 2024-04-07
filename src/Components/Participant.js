export default function Participant({ participant }) {
    return (
        <div className="participantCard">
            <img className="profileIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
            <div>
                <h4>{participant.first_name} {participant.last_name}</h4>
                <p>{participant.email}</p>
                <p># {participant.id}</p>
                <p>{participant.phone}</p>
            </div>
        </div>
    )
}
