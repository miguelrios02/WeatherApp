import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./componets/WeatherCard";
import axios from "axios";

function App() {
  const [coords, setCoords] = useState();
  const [Weather, setWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [isCelsius, setIsCelsius] = useState(true)
  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    setCoords(newCoords);
  };
  console.log(coords);

  const changeUnitTemperature =()=>{
    setIsCelsius(!isCelsius)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  //-------------Peticion de datoso a la api del clima---------
  useEffect(() => {
    if (coords) {
      const API_KEY = "afc7d690725d9d67d7b089226fbb6aed";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${API_KEY}`;
      axios
        .get(URL)
        .then((res) => {
          const tempKelvin = res.data.main.temp;
          const tempCelsius = (tempKelvin - 273.15).toFixed(1);
          const tempFahrenheit = (tempCelsius * (9 / 5) + 32).toFixed(1);
          const newTemperature ={
            celsius:tempCelsius,
            fahrenheit:tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App">
      {Weather ? (<WeatherCard
      weather={Weather} 
      temperature={temperature}
      isCelsius={isCelsius}
      changeUnitTemperature={changeUnitTemperature}
      />) : <p> Loading...</p>}
    </div>
  );
}

export default App;
