import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import Frame from "./images/frame.png";
import Announcement from "./images/Announcement icon.png";
import { GoArrowRight } from "react-icons/go";
import { textVariants } from "../../FramerAnimation/Framer";

export default function PressRelease() {
  const slide = [
    {
      header:
        "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
      phase: "Phase-1 Announcement",
      link: "",
    },
    {
      header:
        "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
      phase: "Phase-2 Announcement",
      link: "",
    },
    {
      header:
        "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
      phase: "Phase-1 Announcement",
      link: "",
    },
    {
      header:
        "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
      phase: "Phase-1 Announcement",
      link: "",
    },
  ];
  return (
    <>
      <section className="w-screen h-auto py-12 md:py-24 px-5 md:px-20 bg-[#DE5126]">
        <div className="container">
          <motion.h2
            className="text-white text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}
          >
            Press Release
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
            // autoplay={{
            //     delay: 4500,
            //     disableOnInteraction: true,
            //     infinite: true,
            // }}
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
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
                pagination: false,
              },
            }}
            className="mySwiper h-[560px] lg:h-auto press-custom-class"
          >
            {
              <div className="">
                {slide.map((ele, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="!w-[325px] sm:!w-[370px] lg:!w-[455px] xl:!w-[520px]"
                    >
                      <div className="bg-white w-[290px] sm:w-[330px] lg:w-[420px] xl:w-[480px] overflow-hidden group">
                        <div className="">
                          <img
                            src={Frame}
                            alt=""
                            className=" w-[580px] h-[230px] lg:h-[300px] xl:h-[340px] transform transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className=" bg-black flex items-center justify-center p-2 rounded-r-full w-[210px] lg:w-[276px] relative bottom-6">
                          <p className=" font-kalnia text-xs lg:text-base font-medium text-white mr-4">
                            {ele.phase}
                          </p>
                          <img src={Announcement} alt="" className=" w-6 h-6" />
                        </div>
                        <div className=" p-6 xl:p-8 flex flex-col justify-center">
                          <p className=" font-arimo font-medium text-xl lg:text-3xl overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-3">
                            {ele.header}
                          </p>
                          <Link to={ele.link}>
                            <motion.div className=" bg-black group-hover:bg-[#DE5126] flex justify-center items-center w-10 h-10 lg:w-16 lg:h-16 rounded-full mt-8 p-2 lg:p-3 text-xl lg:text-3xl font-semibold text-white">
                              <GoArrowRight />
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            }
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
