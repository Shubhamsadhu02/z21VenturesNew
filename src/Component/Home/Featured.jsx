import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";

import yourStory from "./images/feature/yourStory.png";
import economicTimes from "./images/feature/Economic7.png";

export default function Featured() {
  let companieslogo = [
    {
      image: yourStory,
      link: "https://yourstory.com/2022/11/z21-ventures-launches-5-million-fund-to-invest-in-",
    },
    {
      image: economicTimes,
      link: "https://economictimes.indiatimes.com/tech/funding/z21-ventures-sets-up-5-million-fund-to-invest-in-early-stage-companies/articleshow/95451989.cms?from=mdr",
    },
  ];

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
            <h2 className=" text-base lg:text-4xl font-semibold uppercase tracking-wider text-black mb-4 font-arimo">
              Feautred in
            </h2>
          </motion.div>
          <div className="flex justify-center">
            {/* <Link
              to={"/"}
              className="text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-6 py-4 rounded-full">
              Read More <MdArrowOutward />
            </Link> */}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] mt-16">
          {companieslogo.map((item, index) => {
            return (
              <Link to={item.link} target="framename" rel="noopener noreferrer">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
