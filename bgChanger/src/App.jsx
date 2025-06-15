import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="text-white text-4xl font-bold text-center pt-8">
        Background Changer
      </div>
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2 m-4 rounded-full "
        style={{ backgroundColor: "white" }}
      >
        <button
          onClick={() => setColor("red")}
          className="flex flex-wrap rounded-full p-4  gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="flex flex-wrap rounded-full p-4 gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>

        <button
          onClick={() => setColor("green")}
          className="flex flex-wrap rounded-full p-4 gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="flex flex-wrap rounded-full p-4 gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>

        <button
          onClick={() => setColor("orange")}
          className="flex flex-wrap rounded-full p-4 gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "orange" }}
        >
          orange
        </button>

        <button
          onClick={() => setColor("purple")}
          className="flex flex-wrap rounded-full p-4 gap-3 ml-3 mr-3 text-white"
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>
      </div>
    </div>
  );
}

export default App;
