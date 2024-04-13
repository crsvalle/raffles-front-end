import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setActiveComponent }) {

    return (
        <div>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <button onClick={() => setActiveComponent('signup')}>Register</button>
            <button onClick={() => setActiveComponent('participants')}>Participants</button>
            <button onClick={() => setActiveComponent('winner')}>Pick a Winner</button>

        </div>
    )
}
