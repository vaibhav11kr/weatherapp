import { DateTime } from "luxon";

const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};


const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    visibility,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    pressure,
    visibility,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly, current } = data;
  if (Array.isArray(daily) && Array.isArray(hourly)) {
    daily = daily.slice(1, 9).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
        main: d.weather[0].main,
      };
    });

    hourly = hourly.slice(1, 11).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };
    });
    current = current.uvi;
  } else {
    console.error('Daily or hourly data is not an array or is undefined.');
  }

  return { timezone, daily, hourly, current };
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formattedCurrentWeather = await formatCurrentWeather(
      await getWeatherData("weather", searchParams)
    );

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await formatForecastWeather(
      await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "minutely,alerts",
        units: "metric",
      })
    );

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error("Error getting formatted weather data:", error);
  }
};
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
