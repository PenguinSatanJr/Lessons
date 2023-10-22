import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useWeatherForecastQuery } from "./queries";

const API_KEY = '2a03be30c6b356ec785750dbca7de5e1';


const lat = '54.68916';

const lon = "25.2798";

const units = 'metric';


const App = () => {
  const [count, setCount] = useState(0);

  const params = {
    lat,
    lon,
    units,
    appid: API_KEY
  };

  const weatherQuery = useWeatherForecastQuery(params);

  console.log(weatherQuery.data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
