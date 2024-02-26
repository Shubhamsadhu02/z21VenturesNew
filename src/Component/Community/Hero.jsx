import React from "react";
import { motion } from "framer-motion";
import Z21Community from "./images/Z21Community.svg";

import HeroOne from "../Community/images/hero1.png";
import Hero2 from "../Community/images/hero2.png";
import Hero3 from "../Community/images/hero3.png";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Arimo, sans-serif",
  };

  return (
    <section
      className=" w-screen bg-black py-12 md:py-24 px-10 md:px-20 pt-24 md:pt-48">
      <div className="container flex flex-col md:flex-row justify-between">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
          <motion.h1
            className="text-4xl md:text-7xl font-arimo font-bold leading-tight text-white"
            style={fontStyles}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}>
            Active &amp; engaged community
          </motion.h1>

          <div className="text-base md:text-xl text-white font-normal font-arimo md:w-4/5">
            <ul className="list-disc ml-5 mt-10 text-xl font-normal font-arimo leading-9">
              <li>
                We host quarterly meetings with LPs and founders in the Bay Area and India
              </li>
              <li>LPs are deeply involved in connecting us to prospective startups and reviewing </li>
              <li>
                LPs support and guide founders on several areas including getting the right PMF, team building and operations and setting up a robust GTM engine
              </li>
              <li>
                Z21 has helped portfolio companies connect with larger venture funds
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
