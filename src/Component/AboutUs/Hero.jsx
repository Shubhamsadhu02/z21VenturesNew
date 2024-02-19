import React from "react";
import AboutUsHero from "./images/AboutUsHero.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <section
      className="relative h-screen w-screen bg-black bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${AboutUsHero})`, marginTop: "-80px" }}>
      <div className="container flex items-center justify-center">
        <div className="text-center w-8/12 p-4">
          <p className="text-5xl md:text-7xl text-white font-bold">
            We believe in
            <br /> purpose, community & capital
          </p>
        </div>
      </div>
    </section>
  );
}
