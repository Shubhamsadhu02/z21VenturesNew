import { useState, useEffect } from "react";
import InvestmentPhilosophyImg from "../Z21Thesis/images/InvestmentPhilosophyImg.svg";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

const CoreValues = () => {
  return (
    <section className="w-screen py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]">
      <div className="container">
        <div className="w-full md:flex md:justify-between">
          <div className="md:w-1/2 text-gray-600 ">
            <div className="pb-4">
              <motion.h1 className="text-black text-4xl md:text-8xl font-semibold mt-4 text-left mb-16 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Core Values
              </motion.h1>
            </div>
            <img
              src={InvestmentPhilosophyImg}
              alt="Community Circle"
              className="h-auto w-4/5 mt-4"
            />
          </div>
          <div className="mb-8 md:mb-0 md:w-2/5 space-y-12 py-8">
            <div className=" pl-4 ">
              <motion.h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Be Helpful and Collaborative
              </motion.h1>
              <motion.p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Be the most helpful venture fund to support early stage startups
                scale
                <br />
                <br /> Be entrepreneur first and support founders
                <br />
                <br />
                Build the most helpful and impactful community to support
                companies View More
              </motion.p>
            </div>
            <div className=" pl-4 ">
              <motion.h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Practice Honesty and Integrity
              </motion.h1>
              <motion.p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Provide all information transparently to the Limited Partners
                (LPs).
                <br />
                <br /> Clear and regular communication with the LP community
                View More
              </motion.p>
            </div>
            <div className=" pl-4 ">
              <motion.h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Strive for excellence
              </motion.h1>
              <motion.p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Hire and train the best talent
                <br />
                <br />
                Use and practice the best technology and processes
              </motion.p>
            </div>
            <div className=" pl-4 ">
              <motion.h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Drive Purposefulness
              </motion.h1>
              <motion.p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                Invest with conviction and purpose
                <br />
                <br /> Be deliberate in decision making
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
