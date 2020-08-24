import React from "react";
import "./WeatherNow.css";

export default function WeatherNow() {
  return (
    <div className="weather-now">
      <div className="row">
        <div className="col-6">
          <div className="temperature" />

          <span className="units" />
        </div>
        <div className="col-6">
          <img className="icon" alt="" />
        </div>
        <div className="wather-hourly"></div>
      </div>
    </div>
  );
}
