import { useEffect,useState } from "react";
import { LocationSearch } from "./LocationSearch";
import { fetchApiWeather } from "../hooks/fetchDataWeather";
import InfoWeather from "./InfoWeather";

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  const searching = (city) => {
    fetchApiWeather(city)
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.log("Error fetching weather data:", error);
      });
  };
  useEffect(() => {
    fetchApiWeather("Guayaquil").then(data => {
      setWeatherData(data);
    });
  }, []);
  return (
    <>
        <LocationSearch searchLocation={searching}/>
        <InfoWeather weatherData={weatherData}/>
    </>
  )
}
export default WeatherDisplay