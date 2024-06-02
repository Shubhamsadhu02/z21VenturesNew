import { useState, useEffect } from "react";
import Companies from "../PortfolioCompanies/Companies";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";

import companieslogo from "../../data/CompaniesLogo";

const PortfolioCompanies = () => {
  return (
    <section
      className="w-screen py-12 md:py-24 px-5 md:px-20"
      style={{
        backgroundColor: "#EFEFF1",
      }}>
      <div className="container">
        <div className="w-full md:flex justify-between">
          <motion.div
            className="md:w-[70%] lg:w-2/5 text-gray-600"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            <h2 className=" text-base lg:text-lg font-semibold uppercase tracking-wider text-orange-500 mb-4 font-kalnia">
              Portfolio
            </h2>
            <div className="pb-4">
              <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold mt-4 font-arimo">
                Portfolio <br /> companies
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="md:w-[30%] mb-8 md:mb-0"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            <p className="text-base lg:text-xl font-normal border-l-2 border-[#DE5126] pl-4 md:text-left font-arimo">
              We partner with technology focused companies at Pre-seed and Seed
              stage.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] mt-16">
          {companieslogo.slice(0, 12).map((item, index) => {
            return (
              <motion.div
                key={index}
                className="flex w-72 h-28 justify-center items-center bg-white px-[72.53px] py-[36.175px] border-[0.678px] hover:border-[1px] border-[#1113181f]"
                variants={{ ...fadeInAnimationCompanies }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}>
                <img
                  src={item.image}
                  alt={item.link}
                  loading="lazy"
                  className=""
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center mt-24 lg:pr-20">
          <Link
            to={"/portfolio"}
            className="text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-6 py-4 rounded-full">
            View More <MdArrowOutward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCompanies;
