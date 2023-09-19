import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Kryvyi Rih</h1>
      <ul>
        <li>Tuesday 13:00</li>
        <li>Clear Sky</li>
      </ul>
      <footer>
        This site coded by{" "}
        <a
          href="https://gregarious-figolla-9cbc1d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vlada Honchar{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/VladaHV/my-weather-react-app.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
