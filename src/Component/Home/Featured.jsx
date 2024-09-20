import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";

import { fetchFeaturedIn } from "../../Helpers/Api";
import EconomicTimes from './images/feature/Economic7.png';

export default function Featured() {
  const [featuredIn, setfeaturedIn] = useState([]);

  useEffect(() => {
    fetchFeaturedIn()
      .then((result) => {
        setfeaturedIn(result);
      })
      .catch((error) => {
        console.error("Error fetching communities:", error);
      });
  }, []);

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
            <h2 className=" text-2xl lg:text-4xl font-semibold text-black mb-4 font-arimo">
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
        <div className="flex flex-wrap justify-center gap-[30px] mt-4 xl:mt-14">
          {featuredIn.map((item, index) => {
            return (
              <Link to={item.acf.featured_link} target="framename" rel="noopener noreferrer">
                <motion.div
                  key={index}
                  className="w-72 h-24 hover:shadow-lg hover:rounded hover:border"
                  variants={{ ...fadeInAnimationCompanies }}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}>
                  <img
                    src={item.acf.image_url}
                    alt={item.acf.featured_link}
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
