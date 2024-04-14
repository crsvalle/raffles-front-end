import { Link } from 'react-router-dom';
import { Tabs, Tab, Paper } from '@mui/material';
import { useState } from 'react';

export default function Navbar({ setActiveComponent }) {
    const [selectedTab, setSelectedTab]= useState(() => {
        return localStorage.getItem('activeComponent') || 'signup';
    });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setActiveComponent(newValue); 
    };

    return (
        <Paper square>
            <Tabs
                value={selectedTab} 
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                aria-label="Navbar tabs"
            >
                <Tab
                    label={<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>}
                    value="/"
                    component={Link}
                    to="/"
                />
                <Tab
                    label="Register"
                    value="signup"
                    onClick={() => setActiveComponent('signup')}
                />
                <Tab
                    label="Participants"
                    value="participants" 
                    onClick={() => setActiveComponent('participants')}
                />
                <Tab
                    label="Pick a Winner"
                    value="winner" 
                    onClick={() => setActiveComponent('winner')}
                />
            </Tabs>
        </Paper>
    );
}