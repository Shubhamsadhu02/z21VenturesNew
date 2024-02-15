import React from "react";
import AboutUsHero from "./images/AboutUsHero.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <section
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${AboutUsHero})`, marginTop: "-80px" }}>
      <div className="absolute inset-0bg-opacity-50"></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        {/* Centered content container */}
        <div className="text-center p-4">
          <p
            className="text-base md:text-8xl lg:text-8xl text-white font-normal"
            style={fontStyles}>
            We believe in Purpose, community & capital
          </p>
        </div>
      </div>
    </section>
  );
}
