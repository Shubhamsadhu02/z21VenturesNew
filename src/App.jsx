import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Partials/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import Z21Thesis from "./Component/Z21Thesis/Z21ThesisHero.jsx";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Router>
        <Sidebar />
        <main className="max-w-screen-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thesis" element={<Z21Thesis />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
