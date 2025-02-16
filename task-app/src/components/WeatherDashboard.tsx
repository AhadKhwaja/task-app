import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the structure of the weather data you're receiving
interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
}

const WeatherDashboard: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/weather')  // API call to Flask backend
      .then((response) => setWeather(response.data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Description: {weather.description}</p>
    </div>
  );
};

export default WeatherDashboard;
