import React from "react";
import AboutUsHero from "./images/AboutUsHero.png";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <section
      className="relative pt-40 h-auto w-screen bg-black flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center">
        <div className=" relative md:top-20 text-center w-full md:w-[45%] p-4">
          <motion.p className="text-5xl md:text-7xl font-arimo text-white font-bold"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            We believe in
            <br /> purpose, community & capital
          </motion.p>
        </div>
        <div className="herobg">
          <img src={AboutUsHero} alt="Hero Background" />
        </div>
      </div>
    </section>
  );
}
