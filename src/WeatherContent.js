import React from "react";
import Location from "./Location/Location";
import WeatherNow from "./WeatherNow/WeatherNow";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import NextHours from "./NextHours";

export default function WeatherContent() {
  return (
    <div className="row my-card">
      <Location />
      <WeatherNow />
      <WeatherDetails />
      <NextHours />
    </div>
  );
}
