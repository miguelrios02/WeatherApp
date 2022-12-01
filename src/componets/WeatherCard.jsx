import React from "react";

const WeatherCard = ({ weather,temperature,isCelsius,changeUnitTemperature }) => {
  return (
    <article className="weatherCard">
      <h1 className= "t-stroke t-shadow" >Weather App</h1>
      <h3 className= "t-stroke t-shadow" >{`${weather.name}, ${weather.sys.country}`}</h3>
      <section className="watherCard-body">
        <div className="img-weather">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""
            />
        </div>
        <ul>
          <li><strong><p className="item">{weather.weather[0].description}</p></strong></li>
          <li><p className="item">Wind speed:</p> <em>{weather.wind.speed} m/s</em> </li>
          <li><p className="item">Clouds: </p> <em>{weather.clouds.all} %</em></li>
          <li><p className="item">Pressure:</p>  <em>{weather.main.pressure} hPa</em></li>
        </ul>
      </section>
      <p className="t-stroke-temp t-shadow-temp ">{isCelsius ? `${temperature.celsius} °C`:`${temperature.fahrenheit} °F`}</p>
      <button type="button" className="btn btn-primary btn-lg" onClick={changeUnitTemperature}>Degrees °F/°C</button>
    </article>
  );
};

export default WeatherCard;
