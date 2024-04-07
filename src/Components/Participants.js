import { useState, useEffect } from "react";
import Participant from "./Participant";
import SearchBar from "./Searchbar";
const API_URL = process.env.REACT_APP_API_URL;

export default function Participants({ id }) {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState("");

    async function fetchData() {
        try {
            const response = await fetch(`${API_URL}/raffles/${id}/participants`);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const data = await response.json();
            setParticipants(data.data);
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    const filteredParticipants = participants.filter((participant) =>
        `${participant.first_name} ${participant.last_name}`
            .toLowerCase()
            .includes(filterText.toLowerCase())
    );


    const renderData = () => {
        if (loading) {
            return <p>Loading...</p>;
        } else if (filteredParticipants.length === 0) {
            return <p>No User matching: "{filterText}"</p>;
        } else {
            return (
                <div className="participantList">
                    {filteredParticipants.map((participant) => (
                        <Participant key={participant.id} participant={participant} />
                    ))}
                </div>
            );
        }
    };

    return (
        <div>
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            {renderData()}
        </div>
    )
}
