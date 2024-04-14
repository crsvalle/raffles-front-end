import { useState } from "react";
import "./NewRaffle.css"

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
            setError("Successful!");
            setRaffleForm({ name: '', secret_token: '' });
        } catch (error) {
            console.log("error", error.message)
        }

    }

    return (
        <div className="newBox">
            <h3>Create a Raffle</h3>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"><strong className="labelText">Raffle Name*:</strong></label>
                <input
                    type="text"
                    id="name"
                    className="input_box"
                    value={raffleForm.name}
                    onChange={handleChange}
                    placeholder="Name..."
                    required
                />

                <label htmlFor="secret_token"><strong className="labelText">Secret Token*:</strong></label>
                <input
                    type="password"
                    id="secret_token"
                    className="input_box"
                    value={raffleForm.secret_token}
                    onChange={handleChange}
                    placeholder="Token..."
                    required
                />

                <button type="submit" className="submit_button">Create</button>
            </form>
        </div>
    )
}
