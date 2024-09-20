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

import ET from "../Home/images/feature/ET.jpg";
import BusinessWire from "../Home/images/feature/BuisinessWire.png";
import VCCircle from "../Home/images/feature/VCCircle.png";
import Entrackr from "../Home/images/feature/Entracker.png";
import EconomicTimes from "../Home/images/feature/EconomicsTimes.png";

import { GoArrowRight } from "react-icons/go";
import { textVariants } from "../../FramerAnimation/Framer";

export default function PressRelease() {
  const slide = [
    {
      image: EconomicTimes,
      header:
        "Early-stage VC z21 Ventures raises $20 million in first close of second fund",
      phase: "Economic Times",
      link: "https://economictimes.indiatimes.com/tech/funding/early-stage-vc-z21-ventures-raises-20-million-in-first-close-of-second-fund/articleshow/113489365.cms?UTM_Source=Google_Newsstand&UTM_Campaign=RSS_Feed&UTM_Medium=Referral",
    },
    {
      image: BusinessWire,
      header:
        "z21 Ventures Announces $20M First Close of $40M Fund II with WestBridge Capital as Anchor Investor",
      phase: "Businesswire",
      link: "https://www.businesswire.com/news/home/20240919809686/en/z21-Ventures-Announces-20M-First-Close-of-40M-Fund-II-with-WestBridge-Capital-as-Anchor-Investor",
    },
    {
      image: VCCircle,
      header: "Copying is not allowed on this webpage",
      phase: "VCCircle",
      link: "https://www.vccircle.com/westbridgecapital-anchors-first-close-of-z21-ventures-second-vehicle",
    },
    {
      image: Entrackr,
      header: "z21 Ventures announces first close of $40 Mn Fund II",
      phase: "Entrackr",
      link: "https://entrackr.com/2024/09/z21-ventures-announces-first-close-of-40-mn-fund-ii/",
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
              delay: 6500,
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
                      className="md:!w-[385px] lg:!w-[455px] xl:!w-[520px]"
                    >
                      <Link
                        to={ele.link}
                        target="framename"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-white w-[290px] xs:w-[330px] sm:w-[380px] lg:w-[420px] xl:w-[480px] overflow-hidden group">
                          <div className="">
                            <img
                              src={ele.image}
                              alt=""
                              className=" w-[580px] h-[230px] lg:h-[300px] xl:h-[340px] transform transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="bg-black inline-flex items-center p-2 rounded-r-full relative bottom-6">
                            <p className="font-kalnia text-xs lg:text-base font-medium text-white mr-4">
                              {ele.phase}
                            </p>
                            <img
                              src={Announcement}
                              alt=""
                              className="w-6 h-6"
                            />
                          </div>
                          <div className=" p-6 xl:p-8 flex flex-col justify-center">
                            <p className=" font-arimo font-medium text-xl lg:text-3xl overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-2">
                              {ele.header}
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
            }
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
