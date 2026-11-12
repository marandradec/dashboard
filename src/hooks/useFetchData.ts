import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FGuayaquil';

export default function useFetchData(): OpenMeteoResponse | null {

    const [data, setData] = useState<OpenMeteoResponse | null>(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            const respuesta = await fetch(API_URL);
            const json: OpenMeteoResponse = await respuesta.json();
            setData(json);
        };

        obtenerDatos();
    }, []); // El arreglo vacío ejecuta el efecto solo después del primer renderizado

    return data;
}