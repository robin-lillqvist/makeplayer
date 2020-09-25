import React from "react";
import "./App.css";
import CreatePlayer from "./components/CreatePlayer";

const siteList = {
  comeon: "https://comeon.cleverdolphin.se/sv/casino",
  mobilebet: "https://mobilebet.cleverdolphin.se/sv/casino",
};

function App() {
  return (
    <div className="App">
      <h1>Create Player Page</h1>
      <CreatePlayer />
    </div>
  );
}

export default App;
