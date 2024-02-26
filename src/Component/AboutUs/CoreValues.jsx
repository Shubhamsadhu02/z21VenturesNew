import { useState, useEffect } from "react";
import corevalues from "../AboutUs/images/corevalues.png";
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
              src={corevalues}
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
                An entrepreneur first fund that supports startups to scale from zero to one
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
                Build transparency in communication and business practices; accountability to our LPs is of utmost importance
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
                Hire and nurture the best talent, build robust operating processes and leverage best-in-class technology
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
                Partner with deep conviction in founders who are passionate about their mission and purpose
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
