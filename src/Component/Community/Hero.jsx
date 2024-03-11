import React from "react";
import { motion } from "framer-motion";
import Z21Community from "./images/Z21Community.svg";

import HeroOne from "../Community/images/hero1.png";
import Hero2 from "../Community/images/hero2.png";
import Hero3 from "../Community/images/hero3.png";
import Hero4 from "../Community/images/hero4.png";
import list1 from "./images/list1.png";
import list2 from "./images/list2.png";
import list3 from "./images/list3.png";
import list4 from "./images/list4.png";
import { textVariants } from "../../FramerAnimation/Framer";

export default function Hero() {
  return (
    <section
      className=" w-screen bg-black py-12 md:py-24 px-10 md:px-20 pt-24 md:pt-48">
      <div className="container">
        <div className=" text-center">
          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-tight text-white font-arimo"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            Active &amp; engaged <br />community
          </motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-12">
          <motion.div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src={Hero4} alt="" className="col-span-2" />
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 lg:ml-12 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            <ul className="ml-5 mt-10 text-white space-y-6 text-lg lg:text-2xl font-normal font-arimo leading-9 md:w-4/5 list-none">
              <li className="flex items-start justify-center">
                <img src={list1} alt="" className="w-12 h-12 mr-6" />
                <p>We host quarterly meetings with LPs and founders in the Bay Area and India</p>
              </li>
              <li className="flex items-start justify-center">
                <img src={list2} alt="" className="w-12 h-12 mr-6" />
                <p>LPs are deeply involved in connecting us to prospective startups and reviewing</p>
              </li>
              <li className="flex items-start justify-center">
                <img src={list3} alt="" className="w-12 h-12 mr-6" />
                <p>LPs support and guide founders on several areas including getting the right PMF, team building and operations and setting up a robust GTM engine</p>
              </li>
              <li className="flex items-start justify-center">
                <img src={list4} alt="" className="w-12 h-12 mr-6" />
                <p>Z21 has helped portfolio companies connect with larger venture funds</p>
              </li>
            </ul>
          </motion.div>
          {/* <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}>
          <div className="grid grid-cols-2 gap-4">
            <img src={HeroOne} alt="" className="col-span-2" />
            <div className="flex gap-4 col-span-1">
              <img src={Hero2} alt="" className="flex-grow" />
              <img src={Hero3} alt="" className="flex-grow" />
            </div>
          </div>
        </motion.div> */}
        </div>
      </div>
    </section>
  );
}
