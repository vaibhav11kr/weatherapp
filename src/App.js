// App.jsx
import React from 'react';
import './App.css';
import Search from './components/Search';
import Main from './components/Main';
import Hourlyforecast from './components/Hourlyforecast';
import AirConditions from './components/AirConditions';
import Time from './components/Time';
import Weeklyforecast from './components/Weeklyforecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({ q: 'delhi' });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getFormattedWeatherData({ ...query });
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="flex flex-col p-4 w-screen h-screen overflow-scroll md:overflow-hidden bg-[#0B131E]">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : weather ? (
        <>
          <div className="flex flex-col md:flex-row items-center">
            <Search setQuery={setQuery} />
            <Time weather={weather} />
          </div>
          <div className="flex flex-col md:flex-row md:mt-1 mt-6 justify-center box-border">
            <div className="flex flex-col md:w-[60vw] box-border p-4">
              <Main weather={weather} />
              <Hourlyforecast weather={weather.hourly} />
              <AirConditions weather={weather} />
            </div>
            <div className="md:w-[40vw] flex flex-col p-4 box-border">
              <Weeklyforecast weather={weather.daily} />
            </div>
          </div>
        </>
      ) : error ? (
        <p>Error loading weather data. Please try again.</p>
      ) : null}
    </div>
  );
}

export default App;
