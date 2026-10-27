import Typography from '@mui/material/Typography';

export default function HeaderUI() {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{ fontWeight: 'bold', textAlign: 'center' }}
    >
      Dashboard del Clima
    </Typography>
  );
}