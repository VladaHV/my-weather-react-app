import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToF}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={convertToC}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
