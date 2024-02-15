import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import PowerOfCommunityImg from "../../assets/PowerOfCommunity.svg";

const MissionVision = () => {
  return (
    <section
      className="w-screen py-24 px-20"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container">
      <div className="w-full md:flex  md:justify-between">
        <div className="md:w-1/2 text-gray-600">
          <div className=" border-l-2 pl-4 border-orange-500">
            <h1
              className="text-black text-7xl font-semibold mt-4 text-left"
              style={{ fontFamily: "Arimo" }}>
              Mission
            </h1>
            <p
              className="text-xl pl-4 md:text-left mt-4 md:mt-8"
              style={{ borderColor: "#DE5126" }}>
              {" "}
              {/* Adjust the border here */}
              Bring the power of community and capital to support entrepreneurs
              build and scale purposeful companies
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-48 pl-24 text-gray-600">
          <div className=" border-l-2 pl-4 border-orange-500">
            <h1
              className="text-black text-7xl font-semibold mt-4 text-left"
              style={{ fontFamily: "Arimo" }}>
              Vision
            </h1>
            <p
              className="text-xl pl-4 md:text-left mt-4 md:mt-8"
              style={{ borderColor: "#DE5126" }}>
              {" "}
              {/* Adjust the border here */}
              Be the largest collaborative community helping entrepreneurs build
              the most purposeful companies
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MissionVision;
