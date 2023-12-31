import "./App.css";
import Search from "./components/Search";
import Main from "./components/Main";
import Hourlyforecast from "./components/Hourlyforecast";
import AirConditions from "./components/AirConditions";
import Time from "./components/Time";
import Weeklyforecast from "./components/Weeklyforecast";
import getFormattedWeatherData from "./services/weatherServices";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getFormattedWeatherData({ ...query });
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="flex flex-col p-4 w-screen h-screen overflow-scroll md:overflow-hidden bg-[#0B131E]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center">
            <Search setQuery={setQuery} />
            <Time weather={weather} />
          </div>
          <div className="flex flex-col md:flex-row md:mt-1 mt-6 justify-center box-border">
            <div className="flex flex-col md:w-[60vw] box-border p-4">
              <Main weather={weather} />
              <Hourlyforecast />
              <AirConditions weather={weather} />
            </div>
            <div className="md:w-[40vw] flex flex-col p-4 box-border">
              <Weeklyforecast />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
