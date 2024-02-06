import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Partials/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Router>
        <Sidebar />
        <main className="max-w-screen-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
