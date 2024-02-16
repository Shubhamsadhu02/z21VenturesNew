import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import PowerOfCommunityImg from "../../assets/PowerOfCommunity.svg";

const MissionVision = () => {
  return (
    <section
      className="w-screen py-12 md:py-24 px-10 md:px-20"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full md:flex  md:justify-between">
          <div className=" md:w-1/2">
            <div className=" border-l-2 pl-4 border-orange-500">
              <h1 className="text-black text-4xl md:text-8xl font-semibold text-left font-arimo">
                Mission
              </h1>
              <p className="text-base md:text-xl font-normal pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                Bring the power of community and capital to support entrepreneurs
                build and scale purposeful companies
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-14 md:mt-48 md:pl-24">
            <div className=" border-l-2 pl-4 border-orange-500">
              <h1 className="text-black text-4xl md:text-8xl font-semibold text-left font-arimo">
                Vision
              </h1>
              <p className="text-base md:text-xl font-normal pl-4 md:text-left mt-4 md:mt-8 font-arimo">
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
