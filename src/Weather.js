import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Kryvyi Rih");

  function showResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      presipitation: response.data.main.pressure,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
	  city: response.data.name
    });
  }

  function search() {
    const key = "cc51a9af04c66250e3d2034bcced18b7";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;

    axios.get(url).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
