import React from "react";
import "../index.css";

export default function WeatherDetails() {
  return (
    <div className="col-6 new">
      <div className="weather-details">
        <h5>Weather details</h5>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="wind">?</div>

            <div className="pressure">Pressure:</div>
          </div>
          <div className="col-6">
            <div className="feels-like">Feels like</div>
            <div className="min-temp"> Min temp °C/°F</div>
          </div>
          <div className="col-6">
            <div className="sun-set">Sun set:</div>
          </div>
          <div className="col-6">
            <div className="max-temp">Max temp °C/°F</div>
          </div>
        </div>
      </div>
    </div>
  );
}
