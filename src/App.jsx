import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Partials/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import Z21Thesis from "./Component/Z21Thesis/Z21ThesisHero.jsx";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";
import Community from "./Component/Community/Community.jsx";
import PortfolioCompanies from "./Component/PortfolioCompanies/PortfolioCompanies.jsx";
import Footer from "./Component/Footer/Footer.jsx";

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
            <Route path="/community" element={<Community />} />
            <Route path="/portfolio" element={<PortfolioCompanies />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
