import { Card, CardContent, Typography } from '@mui/material';


export default function Participant({ participant }) {
    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber) {
          const cleaned = ('' + phoneNumber).replace(/\D/g, '');
          const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
          if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
          }
        }
        return phoneNumber; 
      };
    return (
        <Card className="participantCard">
             <img className="profileIcon" alt='UserIcon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" />
            <CardContent>
                <Typography variant="body1" component="div" gutterBottom fontWeight="bold">
                    {participant.first_name} {participant.last_name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {participant.email}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <strong>User #</strong>: {participant.id}
                </Typography>
                <Typography variant="body2">
                    📞 {formatPhoneNumber(participant.phone)}
                </Typography>
            </CardContent>
        </Card>
    )
}
