import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";

import { fetchFeaturedIn } from "../../Helpers/Api";
import { InfinitySpin } from "react-loader-spinner";
import { HashLink } from "react-router-hash-link";

export default function Featured() {
  const [featuredIn, setfeaturedIn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedIn()
      .then((result) => {
        setfeaturedIn(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching fetured in:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="w-screen pt-12 pb-24 md:py-24 px-5 md:px-20"
      style={{
        backgroundColor: "#EFEFF1",
      }}
    >
      <div className="container relative">
        <div className="w-full flex justify-between items-center">
          <motion.div
            className="md:w-[70%] lg:w-2/5 text-gray-600"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}
          >
            <h2 className=" text-2xl lg:text-4xl font-semibold text-black mb-4 font-arimo">
              Feautred in
            </h2>
          </motion.div>
          <div className="w-full xl:w-auto flex justify-center absolute xl:static -bottom-20 xl:-bottom-0">
            <HashLink
              smooth
              to={"/blogs#media"}
              className="text-white text-sm lg:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-3 py-2 xl:px-6 xl:py-3 rounded-full"
            >
              Read More <MdArrowOutward />
            </HashLink>
          </div>
        </div>
        {loading ? (
          <>
            <section className="w-screen flex justify-center items-center">
              <InfinitySpin
                visible={true}
                width="200"
                color="#DE5126"
                ariaLabel="infinity-spin-loading"
              />
            </section>
          </>
        ) : (
          <div className="flex flex-wrap justify-center gap-[30px] mt-4 xl:mt-14">
            {featuredIn.slice(0, 8).map((item, index) => {
              return (
                <Link
                  to={item.acf.featured_link}
                  target="framename"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={index}
                    className={`w-72 h-24 hover:shadow-lg hover:rounded hover:border bg-[#${item.acf.background_color}] p-5 flex items-center justify-center`}
                    variants={{ ...fadeInAnimationCompanies }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <img
                      src={item.acf.image_url}
                      alt={item.acf.featured_link}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
