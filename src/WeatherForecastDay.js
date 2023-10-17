import React from "react";
import "./More.css";

export default function WeatherForecastDay(props) {
  let idCollapse = `multiCollapseExample${props.index}`;
  let idCollapseHref = `#${idCollapse}`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    };

    return `${days[day]}`;
  }
  function fullData() {
    let date = new Date(props.data.dt * 1000);
    let data = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (data < 10) {
      data = `0` + data;
    }

    if (month < 10) {
      month = `0` + month;
    }

    return `${data}.${month}.${year}`;
  }

  return (
    <div className="bg-light bg-gradient  rounded-5 rounded-top-0">
      <div className="WeatherForecastDay">{day()}</div>
      <div className="WeatherForecastData">{fullData()}</div>
      <img
        className="WeatherForecastIcon"
        src={iconUrl}
        alt={props.data.weather[0].description}
      />
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTempMax">{maxTemperature()}</span>
        <span className="WeatherForecastTempMin">{minTemperature()}</span>
      </div>
      <a
        href={idCollapseHref}
        data-bs-toggle="collapse"
        role="button"
        aria-expanded="false"
        aria-controls={idCollapse}
      >
        More
      </a>
      <div className="collapse multi-collapse" id={idCollapse}>
        <div className="card bg-light bg-gradient rounded-top-0  text-start more">
          <hr />
          <span className="text-capitalize text-center mb-1">
            {props.data.weather[0].description}
          </span>
          Pressure: {props.data.pressure}
          <br />
          Humidity: {props.data.humidity}%
          <br />
          Wind: {Math.round(props.data.wind_speed)} km/h
          <hr />
          <span className="text-capitalize text-center mb-1">Temp, ºC </span>
          morning: {Math.round(props.data.temp.morn)}
          <br />
          afternoon: {Math.round(props.data.temp.day)}
          <br />
          evening: {Math.round(props.data.temp.eve)}
          <br />
          night: {Math.round(props.data.temp.night)}
          <hr />
          <span className="text-capitalize text-center mb-1">
            Feels like, ºC{" "}
          </span>
          morning: {Math.round(props.data.feels_like.morn)}
          <br />
          afternoon: {Math.round(props.data.feels_like.day)}
          <br />
          evening: {Math.round(props.data.feels_like.eve)}
          <br />
          night: {Math.round(props.data.feels_like.night)}
        </div>
      </div>
    </div>
  );
}
