import { useState } from "react"
const API_URL = process.env.REACT_APP_API_URL;

export default function EndRaffle({id}) {
    const [secretToken, setSecretToken] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setSecretToken(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/raffles/${id}/winner`, {
                method: "PUT",
                body: JSON.stringify({ secret_token: secretToken }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const error = await response.json()
                setError(error.error)
            }else{
                setError("Raffle Ended")
            }
            setSecretToken('')

        } catch (error) {
            console.log("error", error.message)
            
        }
    }

    return (
        <div>
            <h2>Pick a Winner</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="secretToken"
                    value={secretToken}
                    placeholder="Secret token."
                    onChange={handleChange}
                    required />
                <button>Pick a Winner</button>
            </form>
        </div>
    )
}
