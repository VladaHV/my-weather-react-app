import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(null);

  function showResponse(response) {
    console.log(response.data);
    setTemp(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
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
        <h1>Kryvyi Rih</h1>
        <ul>
          <li>Tuesday 13:00</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              className="float-start"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear sky"
            />
            <span className="temp">{temp}</span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Presipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 30 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "cc51a9af04c66250e3d2034bcced18b7";
    let city = "Dnipro";
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;

    axios.get(url).then(showResponse);
    return "Loading...";
  }
}
