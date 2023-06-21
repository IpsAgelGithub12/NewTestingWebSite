import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [titleName, setTitleName] = useState("Hello World!!!!!");
  const [inputFName, setInputFname] = useState("");

  return (
    <>
      {/* <div>
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="grid justify-center pt-20 text-center">
        <h1 className="text-3xl font-bold underline text-red-500">
          {titleName}
        </h1>

        <input
          onChange={(e) => setInputFname(e.target.value)}
          className=" bg-gray-500 text-white px-2 py-2 rounded mt-3"
          placeholder="First Name"
        />

        <button
          onClick={() => setTitleName(inputFName)}
          className="text-white font-bold bg-blue-950 px-2 py-2 mt-3 rounded hover:bg-blue-700"
        >
          Click Me Now!
        </button>

        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-2  ">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="logo h-96 w-96 sm:h-[80px] sm:w-[80px]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react h-96 w-96 sm:h-[80px] sm:w-[80px]"
              alt="React logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
