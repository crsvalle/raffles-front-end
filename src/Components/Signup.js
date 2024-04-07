import { useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;

export default function Signup({ id, participants, setParticipants }) {
    const [userForm, setUserForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });
    const [message, setMessage] = useState(null)

    const handleChange = (e) => {
        setUserForm({ ...userForm, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/raffles/${id}/participants`, {
                method: "POST",
                body: JSON.stringify(userForm),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const newParticipant = await response.json()
            if (response.ok) {
                setUserForm({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: ''
                });
                setParticipants([...participants, newParticipant.data ] )
                setMessage("Sign up succesful!")
            }else{
                setMessage(newParticipant.error)
            }
        } catch (error) {
            console.log("error", error.message)
        }

    };
    return (
        <div>
            {message && <p>{message }</p>}
            <form onSubmit={handleSubmit}>
                <label>First Name: *</label>
                <input
                    type="text"
                    id="first_name"
                    value={userForm.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required />
                <label>Last Name: </label>
                <input
                    type="text"
                    id='last_name'
                    value={userForm.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required />
                <label>Email:</label>
                <input
                    type="text"
                    id='email'
                    value={userForm.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    required />
                <label>Phone:</label>
                <input
                    type="tel"
                    id='phone'
                    value={userForm.phone}
                    onChange={handleChange}
                    placeholder="Phone" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
