import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Form() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    console.log(response);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
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
        <input type="submit" value="Search" />
        <li>
          {" "}
          Temperature: {Math.round(temperature)} °C in {city}
        </li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity} %</li>
        <li>Wind: {wind} km/h</li>
        <li> {icon} </li>
      </form>
    </div>
  );
}

export default Form;
