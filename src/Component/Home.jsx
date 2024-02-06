import React from "react";
import BackgroundImage from "../assets/Hero1.png"; // Make sure this path is correct

export default function Home() {
  return (
    <div
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Overlay container if needed to improve text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Heading text with increased padding from the top */}
      <div className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-full">
        {" "}
        {/* Increased padding-top here */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
          Supporting
          <br />
          Entrepreneurs Build
          <br />
          Purposeful Companies
        </h1>
      </div>

      {/* Paragraph text aligned to the bottom right */}
      <div className="absolute bottom-0 right-0 pb-8 pr-8 md:pb-16 md:pr-16 lg:pb-24 lg:pr-24">
        <p className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white">
          At Z21 Ventures, we empower purposeful companies with passionate
          founders, a supportive community, and impactful investments—solving
          meaningful problems with scalable solutions.
        </p>
      </div>
    </div>
  );
}
