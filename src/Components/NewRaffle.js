import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;
export default function NewRaffle() {
    const [raffleForm, setRaffleForm] = useState({ name: '', secret_token: '' })

    const handleChange = (e) => {
        setRaffleForm({ ...raffleForm, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        createNewRaffle()
    }

    async function createNewRaffle() {
        try {
            const createRaffle = await fetch(`${API_URL}/raffles`, {
                method: "POST",
                body: JSON.stringify(raffleForm),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
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
