import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row mt-5">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
        <div className="row mt-5">
          {forecast.map(function (dailyForecast, index) {
            if (index >= 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `3f6be1c407b0d9d1933561808db358ba`; //from SheCodes ApiKey
    const url = `https://api.openweathermap.org/data/2.5/onecall?`;
    let units = `metric`;
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
