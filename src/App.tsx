/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import LegendStateForm from "./LegendStateForm";
import ReactForm from "./ReactForm";
import "./App.css";
import "./tabs.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("react");

  console.log("App rerender");

  return (
    <div className="app-container">
      <h1>Name Form Comparison</h1>

      <div className="tabs">
        <button className={activeTab === "react" ? "active" : ""} onClick={() => setActiveTab("react")}>
          React useState
        </button>
        <button className={activeTab === "legend" ? "active" : ""} onClick={() => setActiveTab("legend")}>
          LegendState
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "react" && <ReactForm />}
        {activeTab === "legend" && <LegendStateForm />}
      </div>
    </div>
  );
};

export default App;
