import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dnipro" />
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
    </div>
  );
}
