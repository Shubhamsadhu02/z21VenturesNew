import { motion } from "framer-motion";
import React from "react";
import { textVariants } from "../../FramerAnimation/Framer";

export default function JoinZ21() {
  return (
    <section className="w-screen bg-black py-12 md:py-24 px-10 md:px-20">
      <div className="container">
        <div className="inset-0 bg-opacity-50"></div>
        <div className=" w-full">
          <div className="border-b-[1px] border-white pb-14">
            <motion.h2
              className="text-base md:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4 font-kalnia"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Contact Us
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-9xl font-semibold leading-[120%] text-white font-arimo w-4/5"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Looking to join the z21 portfolio?
            </motion.h1>
          </div>

          <motion.h2
            className="text-2xl md:text-4xl tracking-wide text-left text-white mt-8 font-arimo "
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            Reach out to us at{" "}
            <span className=" text-orange-500">
              contact@z21.ventures
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
