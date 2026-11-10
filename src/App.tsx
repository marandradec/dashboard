import './App.css';
import { useState } from 'react';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {

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
            <Grid size={{ xs: 12, md: 9 }}>
                Elemento: Indicadores
                {cityText}
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