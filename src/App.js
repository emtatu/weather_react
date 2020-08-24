import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 50,
    animate: true,
  };
  return (
    <div className="App">
      <h1>Weather Forecast </h1>
      <Form temperature={2} city="Brussels" />
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}

export default App;
