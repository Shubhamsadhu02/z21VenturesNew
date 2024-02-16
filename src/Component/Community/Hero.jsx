import React from "react";
import { motion } from "framer-motion";
import Z21Community from "./images/Z21Community.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Arimo, sans-serif",
  };

  return (
      <section
        className="relative h-screen w-screen bg-black bg-no-repeat bg-cover md:bg-center py-20"
        style={{ backgroundImage: `url(${Z21Community})` }}>
      <div className="container">
        <motion.div
          className="absolute top-0 pt-12 md:pt-32 px-8 md:px-16 lg:px-20 md:w-3/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
          <motion.h1
            className="text-4xl md:text-8xl font-arimo font-bold leading-tight text-white"
            style={fontStyles}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}>
            Active and engaged <span className=" font-kalnia font-normal">community</span>
            <motion.p1
              className="text-2xl text-white font-mono"
              style={{ fontFamily: "Arimo" }}>
              <ul className="list-disc ml-5 mt-10 text-2xl font-normal font-arimo">
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
    </section>
  );
}
