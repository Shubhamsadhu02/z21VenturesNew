import React from "react";
import Z21ThesisHero from "./images/Z21ThesisHero.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <div
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Z21ThesisHero})`, marginTop: "-80px" }}>
      <div className="absolute inset-0 "></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <div className="absolute bottom-0 right-0 pb-8 pr-8 md:pb-16 md:pr-16 lg:pb-24 lg:pr-2">
        <p
          className="text-base md:text-8xl lg:text-8xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal"
          style={fontStyles}>
          z21 thesis
        </p>
      </div>
    </div>
  );
}
