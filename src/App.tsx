import './App.css';
import { useState } from 'react';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';

function App() {
    const dataFetcherOutput = useFetchData();

    const [city, setCity] = useState('');

    // Texto que se muestra debajo de cada elemento
    const cityText = city && (
        <p>
            Ciudad seleccionada:{' '}
            <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{city}</span>
        </p>
    );

    return (
        <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>

            {/* Encabezado */}
            <Grid size={{ xs: 12, md: 12 }}>
                <HeaderUI />
            </Grid>

            {/* Alertas */}
            <Grid size={{ xs: 12, md: 12 }}
                container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>

                <AlertUI description="No se prevén lluvias" />

            </Grid>

            {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
                <SelectorUI city={city} onCityChange={setCity} />
                {cityText}
            </Grid>

            {/* Indicadores */}
            <Grid container size={{ xs: 12, md: 9 }}>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI 
                        title='Temperatura (2m)' 
                        description={`${dataFetcherOutput?.current?.temperature_2m ?? 'XX'} °C`} 
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI 
                        title='Temperatura aparente' 
                        description={`${dataFetcherOutput?.current?.apparent_temperature ?? 'XX'} °C`} 
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI 
                        title='Velocidad del viento' 
                        description={`${dataFetcherOutput?.current?.wind_speed_10m ?? 'XX'} km/h`} 
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI 
                        title='Humedad relativa' 
                        description={`${dataFetcherOutput?.current?.relative_humidity_2m ?? 'XX'} %`} 
                    />
                </Grid>

            </Grid>

            {/* Gráfico */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Gráfico
                {cityText}
            </Grid>

            {/* Tabla */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Tabla
                {cityText}
            </Grid>

            {/* Información adicional */}
            <Grid size={{ xs: 12, md: 12 }}>
                Elemento: Información adicional
                {cityText}
            </Grid>

        </Grid>
    );
}

export default App;