import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;
export default function NewRaffle({ handleRaffleChanges }) {
    const [raffleForm, setRaffleForm] = useState({ name: '', secret_token: '' })
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setRaffleForm({ ...raffleForm, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/raffles`, {
                method: "POST",
                body: JSON.stringify(raffleForm),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const newRaffle = await response.json()
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            handleRaffleChanges(newRaffle.data)
            setError(null);
            setRaffleForm({ name: '', secret_token: '' });
        } catch (error) {
            console.log("error", error.message)
        }

    }

    return (
        <div>
            <h2>Create a Raffle!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Raffle Name: </label>
                <input
                    type="text"
                    id="name"
                    value={raffleForm.name}
                    onChange={handleChange}
                    required />
                <label>Secret Token </label>
                <input
                    type="text"
                    id='secret_token'
                    value={raffleForm.secret_token}
                    onChange={handleChange}
                    required />
                <button>Create</button>
            </form>
        </div>
    )
}
