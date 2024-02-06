import React from "react";
import PowerOfCommunityImg from "../../assets/PowerOfCommunity.svg";

const PowerOfCommunity = () => {
  return (
    <div className="w-full h-screen px-8 md:px-16 lg:px-20 bg-gradient-to-r from-white1 to-pink1">
      {/* Moved the font link to index.html ideally */}
      <div className="text-center pt-12 pb-8">
        <h2
          className="text-lg font-semibold uppercase tracking-wider text-left text-orange1"
          style={{ fontFamily: "Kalnia" }}>
          {" "}
          {/* Corrected style syntax */}
          Community
        </h2>
        <h1
          className="text-black text-7xl font-semibold mt-4 text-left"
          style={{ fontFamily: "Arimo" }}>
          {" "}
          {/* Added font style */}
          The power of
          <br /> community
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* Adjusted for responsiveness */}
        <div className="md:w-1/2">
          {/* Correct usage of the imported SVG image */}
          <img
            src={PowerOfCommunityImg}
            alt="Community Circle"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-gray-600 mt-8 md:mt-0">
          {/* Added margin top for mobile layout */}
          <p className="text-sm">
            We bring institutional investors, corporates, and academic
            institutions into the fold, creating a diverse and impactful
            community for our portfolio companies to thrive in. Z21 Ventures
            fosters a vibrant community-driven ecosystem designed to empower
            early-stage startups with strategic guidance, expert mentorship, and
            invaluable connections.
          </p>
          <a href="#more" className="text-blue-600 text-sm mt-4 inline-block">
            View More ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default PowerOfCommunity;
