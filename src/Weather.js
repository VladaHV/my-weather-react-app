import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <span className="temp">6</span>
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
}
