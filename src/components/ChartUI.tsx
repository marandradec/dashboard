import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface ChartUIProps {
    title: string;
    labels: string[];
    values1: number[];
    values2: number[];
    label1: string;
    label2: string;
}

export default function ChartUI({ title, labels, values1, values2, label1, label2 }: ChartUIProps) {
    return (
        <>
            <Typography variant="h5" component="div">{title}</Typography>
            <LineChart
                height={300}
                series={[
                    { data: values1, label: label1 },
                    { data: values2, label: label2 },
                ]}
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </>
    );
}