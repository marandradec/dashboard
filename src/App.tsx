import { useState, useEffect } from 'react';
import './App.css';
import { Grid, Typography, CircularProgress } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import IndicatorUI from './components/IndicatorUI';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export default function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Coordenadas de Guayaquil para Open-Meteo
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&current=temperature_2m,relative_humidity_2m,wind_speed_10m';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temperature: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del clima:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={4} sx={{ p: 4, justifyContent: 'center', alignItems: 'center' }}>
      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        sx={{ justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <AlertUI
          description="Índice UV alto: Use protector solar"
          severity="warning"
          variant="filled"
        />
      </Grid>

      {/* Selector de Ciudad */}
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Ciudad</Typography>
        <Typography variant="body2" color="text.secondary">Guayaquil, Ecuador</Typography>
      </Grid>

      {/* Indicadores (Dinámicos desde la API o cargando) */}
      <Grid size={{ xs: 12, md: 9 }} container spacing={2}>
        {loading ? (
          <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', py: 2 }}>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <Grid size={{ xs: 12, sm: 4 }}>
              <IndicatorUI title="Temperatura" metric={`${weather?.temperature} °C`} subtitle="Actual" />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <IndicatorUI title="Humedad" metric={`${weather?.humidity} %`} subtitle="Relativa" />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <IndicatorUI title="Viento" metric={`${weather?.windSpeed} km/h`} subtitle="Velocidad" />
            </Grid>
          </>
        )}
      </Grid>

      {/* Gráfico y Tabla */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Gráfico de Comportamiento</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Tabla de Pronóstico</Typography>
      </Grid>

      {/* Información adicional */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          Datos provistos por Open-Meteo API
        </Typography>
      </Grid>
    </Grid>
  );
}