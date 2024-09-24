import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import Announcement from "./images/Announcement icon.png";

import { GoArrowRight } from "react-icons/go";
import { textVariants } from "../../FramerAnimation/Framer";
import { fetchFeaturedIn } from "../../Helpers/Api";
import { InfinitySpin } from "react-loader-spinner";

export default function PressRelease() {
  const [featuredIn, setfeaturedIn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedIn()
      .then((result) => {
        setfeaturedIn(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Blogs and Media:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section
        className="w-screen h-auto py-12 md:py-24 px-5 md:px-20 bg-[#DE5126]"
        id="media"
      >
        <div className="container">
          <motion.h2
            className="text-white text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}
          >
            Blogs & Media
          </motion.h2>
        </div>
      </section>

      <section className="w-screen h-auto pb-12 md:pb-24 pl-5 md:pl-20 bg-[#DE5126]">
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
              infinite: true,
            }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: true,
                pagination: {
                  dynamicBullets: true,
                  clickable: false,
                  bulletClass: "press-bullet-class",
                  bulletActiveClass: "press-bullet-active-class",
                  className: "press-bullet-active-class",
                },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: false,
                loop: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: false,
                loop: true,
              },
            }}
            className="mySwiper h-[560px] lg:h-auto press-custom-class"
          >
            {loading ? (
              <>
                <section className="w-screen flex justify-center items-center">
                  <InfinitySpin
                    visible={true}
                    width="200"
                    color="#FFFFFF"
                    ariaLabel="infinity-spin-loading"
                  />
                </section>
              </>
            ) : (
              <div className="">
                {featuredIn.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="md:!w-[385px] lg:!w-[455px] xl:!w-[520px]"
                    >
                      <Link
                        to={item.acf.featured_link}
                        target="framename"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-white w-[290px] xs:w-[330px] sm:w-[380px] lg:w-[420px] xl:w-[480px] overflow-hidden group">
                          <div
                            style={{
                              backgroundColor: `#${item.acf.background_color}`,
                            }}
                            className={`w-[290px] xs:w-[330px] sm:w-[380px] lg:w-[420px] xl:w-[480px] h-[230px] lg:h-[300px] xl:h-[340px] p-4 flex justify-center items-center`}
                          >
                            <img
                              src={item.acf.image_url}
                              alt={item.acf.featured_link}
                              className="transform transition-transform duration-300 group-hover:scale-105 object-contain"
                            />
                          </div>
                          <div className="bg-black inline-flex items-center p-2 rounded-r-full relative bottom-6">
                            <p className="font-kalnia text-xs lg:text-base font-medium text-white mr-4">
                              {item.acf.phase}
                            </p>
                            <img
                              src={Announcement}
                              alt="Announcement"
                              className="w-6 h-6"
                            />
                          </div>
                          <div className=" p-6 xl:p-8 flex flex-col justify-center">
                            <p className=" font-arimo font-medium text-xl lg:text-3xl overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-2">
                              {item.acf.header}
                            </p>
                            <motion.div className=" bg-black group-hover:bg-[#DE5126] flex justify-center items-center w-10 h-10 lg:w-16 lg:h-16 rounded-full mt-8 p-2 lg:p-3 text-xl lg:text-3xl font-semibold text-white">
                              <GoArrowRight />
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </div>
            )}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
