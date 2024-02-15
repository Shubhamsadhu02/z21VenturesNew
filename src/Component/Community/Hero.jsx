import React from "react";
import { motion } from "framer-motion";
import Z21Community from "./images/Z21Community.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Arimo, sans-serif",
  };

  return (
    <div className="relative h-screen w-screen -mt-20">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center left-half"
        style={{ backgroundImage: `url(${Z21Community})` }}></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <motion.div
          className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-3/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white"
            style={fontStyles}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}>
            Active and engaged community
            <motion.p1
              className="text-2xl text-white font-mono"
              style={{ fontFamily: "Arimo" }}>
              <ul className="list-disc ml-5 mt-10">
                <li>
                  Quarterly meetings with LPs and founders in the Bay Area and
                  India
                </li>
                <li>Advisor involvement in sourcing and reviewing companies</li>
                <li>
                  Advisors support founders with questions about PMF, GTM, and
                  hiring
                </li>
                <li>
                  Z21 has helped portfolio companies connect with larger venture
                  funds
                </li>
              </ul>
            </motion.p1>
          </motion.h1>
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 pb-8 pr-8 md:pb-16 md:pr-16 lg:pb-24 lg:pr-24"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}></motion.div>
      </div>
    </div>
  );
}
