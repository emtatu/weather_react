import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Icon from "./Icon";

function Form() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  let [pressure, setPressure] = useState(null);
  let [minTemp, setMintemp] = useState(null);
  let [maxTemp, setMaxtemp] = useState(null);

  function showWeather(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setFeelsLike(response.data.main.feels_like);
    setPressure(response.data.main.pressure);
    setMintemp(response.data.main.temp_min);
    setMaxtemp(response.data.main.temp_max);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39cd37d4f42532f4a9ef52cf0defe7d0&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchCity">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="searchCity" onChange={updateCity} />
        <input type="submit" value="🔍" />

        <div className="weather-now">
          <div className="row">
            <div className="col-6">
              <div className="temperature" />
              <div>
                <h4 className="animate__animated">Last Update: day, time </h4>

                <div className="temp">
                  {" "}
                  {Math.round(temperature)} °C in {city}
                </div>
                <div className="floath-left">
                  <Icon code={icon} />
                </div>

                <div className="description"> {description}</div>
                <div className="humidity">humidity: {humidity} %</div>
                <div className="feelsLike">
                  feels like: {Math.round(feelsLike)}°C
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="weather-details">
                <h4>Weather details</h4>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <div className="wind">Wind: {wind} km/h</div>
                    <div className="pressure">Pressure: {pressure}</div>
                  </div>
                  <div className="col-6">
                    <div className="max-temp">
                      Max temp {Math.round(maxTemp)}°C/°F
                    </div>
                    <div className="min-temp">
                      {" "}
                      Min temp {Math.round(minTemp)}°C/°F
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
