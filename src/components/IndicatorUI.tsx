import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IndicatorConfig {
  title: string;
  metric: string;
  subtitle: string;
}

export default function IndicatorUI({ title, metric, subtitle }: IndicatorConfig) {
  return (
    <Card sx={{ minWidth: 200, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          {metric}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}