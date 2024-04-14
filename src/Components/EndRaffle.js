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
                    type="password"
                    id="secretToken"
                    className="input_box"
                    value={secretToken}
                    placeholder="Secret token."
                    onChange={handleChange}
                    required />
                <button className="submit_button">Pick a Winner</button>
            </form>

            <div className="container">
                <h5>Secret Needed!</h5>
                <p>The secret token used when creating the raffle must be provided.</p>
            </div>
        </div>
    )
}
