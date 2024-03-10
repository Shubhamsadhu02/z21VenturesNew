import { useState, useEffect } from "react";
import InvestmentPhilosophyImg from "../Z21Thesis/images/InvestmentPhilosophyImg.svg";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import OurDifferentiation1 from "../Z21Thesis/images/OurDifferentiation1.svg";
import OurDifferentiation2 from "../Z21Thesis/images/OurDifferentiation2.svg";
import OurDifferentiation3 from "../Z21Thesis/images/OurDifferentiation3.svg";
import OurDifferentiation4 from "../Z21Thesis/images/OurDifferentiation4.svg";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

const InvestmentPhilosophy = () => {
  return (
    <section className="w-screen h-auto py-12 md:py-24 px-10 md:px-20 md:pb-96 bg-[#EFEFF1]">
      <div className="container">
        <div className="w-full flex flex-col md:items-end">
          <div className=" w-1/2">
            <motion.h1
              className="text-black text-4xl md:text-8xl font-semibold mt-4 text-left mb-16 font-arimo"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Our differentiation
            </motion.h1>
          </div>
          <div className="md:relative flex flex-col mt-0 md:mt-4">
            <div className="md:w-1/2 text-gray-600 pl-8 flex flex-col gap-14 md:gap-32 -mt-72">
              <div className="">
                <img
                  src={OurDifferentiation4}
                  alt="Community Circle"
                  className="h-auto w-2/6 mt-4"
                />
                <motion.h1
                  className="text-2xl md:text-4xl mt-4 text-black font-semibold font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 Community
                </motion.h1>
                <motion.p
                  className="text-base md:text-xl md:w-3/4 border-l-2 border-[#DE5126] pl-4 md:text-left md:mt-8 mt-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 Community is going to be one of the largest communities of
                  entrepreneurs, executives, and innovation enthusiasts that
                  will be available to help the companies on specific problems
                  and scale. We already have a community of over 120 advisors
                  who are experts across the spectrum.
                </motion.p>
              </div>
              <div className="">
                <img
                  src={OurDifferentiation2}
                  alt="Community Circle"
                  className="h-auto w-2/6 mt-4"
                />
                <motion.h1
                  className="text-2xl md:text-4xl text-black font-semibold mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 Leadership Summit
                </motion.h1>
                <motion.p
                  className="text-base md:text-xl md:w-3/4 border-l-2 border-[#DE5126] pl-4 md:text-left md:mt-8 mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Held at the SF Bay area every year, Z21 Leadership Summit will
                  get portfolio leaders across the world to come meet executives
                  from hundreds of tech companies.
                </motion.p>
              </div>
            </div>
            <div className="md:absolute md:right-0 md:top-72 md:w-1/2 text-gray-600 pl-8 flex flex-col gap-14 md:gap-32 -mt-60">
              <div className="">
                <img
                  src={OurDifferentiation3}
                  alt="Community Circle"
                  className="h-auto w-2/6 mt-4"
                />
                <motion.h1
                  className="text-2xl md:text-4xl text-black font-semibold mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 Investor Partnerships
                </motion.h1>
                <motion.p
                  className="text-base md:text-xl md:w-3/4 border-l-2 border-[#DE5126] pl-4 md:text-left md:mt-8 mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 will have partnerships with hundreds of later stage
                  investors and will facilitate introductions for later stage
                  investments.
                </motion.p>
              </div>
              <div className="">
                <img
                  src={OurDifferentiation1}
                  alt="Community Circle"
                  className="h-auto w-2/6 mt-4"
                />
                <motion.h1
                  className="text-2xl md:text-4xl text-black font-semibold mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 Corporate Partnerships
                </motion.h1>
                <motion.p
                  className="text-base md:text-xl md:w-3/4 border-l-2 border-[#DE5126] pl-4 md:text-left md:mt-8 mt-4 font-arimo"
                  initial="hidden"
                  whileInView="visible"
                  variants={{ ...textVariants }}>
                  Z21 will have partnerships with hundreds of Corporate
                  Development teams across the world to facilitate partnerships
                  for portfolio companies.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
