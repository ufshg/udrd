import { HistoryGraph } from "./Components/HistoryGraph";
import { convertUserSolvingHistoryToHistoryGraphData } from "./utils/dataConversion";
import { generateRandomUserSolvingHistory } from "./utils/number";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./normalize.css";
import "./App.css";
import "./Reset2024.css";

const userSolvingHistory = generateRandomUserSolvingHistory();

function App() {
  const [count, setCount] = useState(0);

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
        <HistoryGraph
          data={convertUserSolvingHistoryToHistoryGraphData(userSolvingHistory)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
