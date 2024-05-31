import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/Hero1.png";
import { textVariants } from "../../FramerAnimation/Framer";
import HeroBg from './images/HeroBg.png';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

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
            className=" text-4xl md:text-6xl lg:text-8xl font-bold leading-[100%] text-white font-arimo"
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
        <motion.div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-24">
          <motion.div className="lg:w-1/2 order-last md:order-first">
            <div className="grid grid-cols-2 gap-4">
              <img src={HeroBg} alt="" className="col-span-2" />
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 lg:ml-12 flex flex-col justify-between pb-6 md:pb-0 mb-10 lg:mb-20 order-first md:order-last">
            <div className="">
              <motion.h4 className=" font-arimo font-normal text-base md:text-xl xl:text-2xl text-[#888D96] mb-8"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>Fund 1 Metrics</motion.h4>
              <div className="flex justify-between mb-8 xl:mb-0">
                <div className=" border-l-2 border-[#EFEFF1] pl-4 xl:pl-12">
                  <h2 className=" font-arimo font-bold text-3xl xl:text-8xl text-[#DE5126]"><CountUp end={25} duration={2} />+</h2>
                  <p className=" font-arimo font-normal text-base xl:text-2xl text-white">Investments</p>
                </div>
                <div className=" border-l-2 border-[#EFEFF1] pl-4 xl:pl-12">
                  <h2 className=" font-arimo font-bold text-3xl xl:text-8xl text-[#DE5126]"><CountUp end={100} duration={2.5} />+</h2>
                  <p className=" font-arimo font-normal text-base xl:text-2xl text-white">Community Members</p>
                </div>
              </div>
            </div>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white font-normal font-arimo"
              initial="hidden"
              whileInView="visible"
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
