import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Raffles({ raffle }) {
    return (
        <Link to={`/raffles/${raffle.id}`} style={{ textDecoration: 'none', color:'black' }}>
            <Box boxShadow={3} p={2} borderRadius={5} bgcolor="white" marginBottom={2}>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                    <strong>{raffle.name}</strong>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Created at: {new Date(raffle.created_at).toLocaleString()}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {raffle.ended ? 'This raffle is done' : 'This raffle is ongoing'}
                </Typography>
                <Typography variant="body2">
                    🏆 Winner ID:{' '}
                    {raffle.winner_id ? (
                        <span>{raffle.winner_id}</span>
                    ) : (
                        <span style={{ fontStyle: 'italic', color: 'gray' }}>No winner yet</span>
                    )}
                </Typography>
            </Box>
        </Link>
    )
}
