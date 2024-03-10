import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.png";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

const MissionVision = () => {
  return (
    <section
      className="w-screen py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full md:flex  md:justify-between">
          <div className=" md:w-1/2">
            <div className=" border-l-2 pl-4 border-orange-500">
              <motion.h1 className="text-black text-4xl md:text-8xl font-semibold text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Mission
              </motion.h1>
              <motion.p className="text-base md:text-xl font-normal md:w-5/6 pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Bring the power of community and capital to support
                entrepreneurs build and scale purposeful companies
              </motion.p>
            </div>
          </div>
          <div className="md:w-1/2 mt-14 md:mt-52 md:pl-24">
            <div className=" border-l-2 pl-4 border-orange-500">
              <motion.h1 className="text-black text-4xl md:text-8xl font-semibold text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Vision
              </motion.h1>
              <motion.p className="text-base md:text-xl font-normal md:w-5/6 pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Be the largest collaborative community helping entrepreneurs
                build the most purposeful companies
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
