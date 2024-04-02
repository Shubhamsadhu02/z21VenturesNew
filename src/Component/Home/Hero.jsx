import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/Hero1.png";
import { textVariants } from "../../FramerAnimation/Framer";
import HeroBg from './images/HeroBg.png';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Home() {
  const [text, setText] = useState("");
  const fullText =
    "Supporting<br/>Entrepreneurs Build<br/>Purposeful Companies";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section
      className="relative w-screen bg-black bg-no-repeat bg-cover bg-center pt-16 md:pt-32 px-5 md:px-20">
      <div className="container h-full">
        <motion.div className="w-full">
          <motion.h1
            className=" text-4xl md:text-6xl lg:text-7xl font-bold leading-[100%] text-white font-arimo"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            {/* <span dangerouslySetInnerHTML={{ __html: text }}></span> */}
            Supporting
            <br />
            Entrepreneurs Build
            <br />
            Purposeful Companies
          </motion.h1>
        </motion.div>
        <motion.div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-12">
          <motion.div className="lg:w-1/2 order-last md:order-first">
            <div className="grid grid-cols-2 gap-4">
              <img src={HeroBg} alt="" className="col-span-2" />
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 lg:ml-12 flex flex-col justify-center pb-6 md:pb-0 md:pt-12 order-first md:order-last">
            <motion.p
              className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal font-arimo"
              initial="hidden"
              animate="visible"
              variants={{ ...textVariants }}>
              z21 Ventures believes purposeful companies are built by combining
              passionate entrepreneurs with a supportive community of successful
              operators and investors.
            </motion.p>
            <Link to="/contact" className=" block md:hidden">
              <button className="contact-nav bg-[#efeff129] hover:bg-[#DE5126] mt-6 px-6 py-3 rounded-full text-white text-base font-arimo font-semibold flex justify-center items-center">
                Contact Us <GoArrowUpRight className="ml-1" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
