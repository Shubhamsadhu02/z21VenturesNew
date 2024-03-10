import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Quote from "../Home/images/Quote.png";
import Nikunj from "../Home/images/Nikunj.png";
import Sushant from "../Home/images/Sushant.png";
import Rajasekhar from "../Home/images/Rajasekhar.png";
import Sunny from "../Home/images/Sunny.png";
import Aron from "../Home/images/Aron.png";
import Vishrut from "../Home/images/Vishrut.png";
import Mainak from "../Home/images/Mainak.png";
import Aayush from "../Home/images/Aayush.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

export default function TransformingVision() {
  const slide = [
    {
      image: Nikunj,
      header: "z21 Ventures has been a game changer for us",
      description:
        "z21 Ventures has been a game-changer for us. Their strategic investments and unwavering support propelled our startup to new heights. Truly a visionary partner!",
      name: "Nikunj Bajaj | CEO - Truefoundary",
      link: "https://www.linkedin.com/in/nikunj-bajaj-10476824/",
    },
    {
      image: Sushant,
      header: "It has been an enriching experience",
      description:
        "Being part of the z21 community has been an enriching experience. The collaborative environment, coupled with z21's insightful guidance, has played a crucial role in our journey of innovation and success",
      name: "Sushant Gupta | CEO - Meomind",
      link: "https://www.linkedin.com/in/sushantgupta1/",
    },
    {
      image: Rajasekhar,
      header: "My experience with z21 has been outstanding",
      description:
        "The team and community has hands-on business experience, deep understanding of healthcare and enterprise software, and extensive industry connections make them invaluable assets for startups seeking more than just funding. I highly recommend them.",
      name: "Rajasekhar Maddireddy | Founder & CEO of Coverself",
      link: "https://www.linkedin.com/in/rajasekhar-maddireddy/",
    },
    {
      image: Sunny,
      header: "HEN is immensely grateful for z21's support and guidance",
      description:
        "Their strategic input has been pivotal in HEN's growth. z21 transcends the role of investors by being invaluable collaborators on our startup journey.",
      name: "Sunny Sethi | Founder & CEO of HEN Nozzles",
      link: "https://www.linkedin.com/in/sunny-sethi-polymers/",
    },
    {
      image: Aron,
      header:
        "z21 Ventures' multifaceted support has been invaluable to Develo",
      description:
        "Leveraging their extensive Community, they have helped us refine our go-to-market strategy have significantly accelerated our growth. We're appreciative of the journey shared so far-- and looking forward to continuing the partnership.",
      name: "Aron Sin | Co-Founder & CEO of Develo",
      link: "https://www.linkedin.com/in/aaronsin/",
    },
    {
      image: Vishrut,
      header: "Partnering with z21 as an investor transformed our company",
      description:
        "Their vast network of experienced advisors provided invaluable expertise, enriching our strategic and operational capabilities. z21's dedication went beyond investment, playing a crucial role in guiding our growth journey. Collaborating with their insightful, supportive, and fun team has been fantastic.",
      name: "Vishrut Malhotra | Co-Founder & CEO of Rexera",
      link: "https://www.linkedin.com/in/vishrut-malhotra-6b13a311/",
    },
    {
      image: Mainak,
      header: "z21 Ventures' understand entrepreneurial journey",
      description:
        "z21 Ventures is founded by entrepreneurs who not only understand the ups and downs of the entrepreneurial journey but they also help you along the journey as partners in the truest sense",
      name: "Mainak Sarkar | Co-Founder & CEO of Explorex",
      link: "https://www.linkedin.com/in/mainak-explorex/",
    },
    {
      image: Aayush,
      header: "z21 Ventures: Investors and Expert Advisors for Inito",
      description:
        "z21 Ventures did not just invest in Inito but they extended our advisory board with a rich community of subject matter experts in technology and business that are very relevant to us",
      name: "Aayush Rai | Co-Founder & CEO of Inito",
      link: "https://www.linkedin.com/in/aayushinito/",
    },
  ];
  return (
    <section className="w-screen bg-black py-12 md:py-24 px-10 md:px-20">
      <div className="container">
        <div className="w-full border-b-2 pb-12 border-[#de5126]">
          <motion.h2 className=" text-base md:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4 font-kalnia"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            Testimonials
          </motion.h2>
          <motion.h1 className="text-4xl md:text-8xl font-bold leading-tight text-white font-arimo"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            Driving transformational growth
          </motion.h1>
        </div>
        <div className="my-12 md:my-24">
          <Swiper slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              infinite: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper h-[880px] md:h-[600px]">
            {
              <div className="">
                {slide.map((ele, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="md:flex items-center">
                        <div className="flex-[50%]">
                          <img
                            src={ele.image}
                            alt=""
                            width={400}
                            height={416}
                          />
                        </div>
                        <div className=" flex-[50%]">
                          <div className="">
                            <img src={Quote} alt="quote" />
                          </div>
                          <div className="">
                            <h1 className=" text-white font-arimo text-2xl md:text-4xl lg:text-6xl mb-6">
                              {ele.header}
                            </h1>
                          </div>
                          <div className="">
                            <p className=" text-white font-arimo text-base md:text-xl font-normal mb-6">
                              {ele.description}
                            </p>
                          </div>
                          <div className="">
                            <Link to={ele.link}
                            target="framename"
                            rel="noopener noreferrer">
                              <p className=" text-orange-500 font-arimo text-base md:text-xl font-normal flex items-center">
                                {ele.name} <MdArrowOutward />
                              </p>
                            </Link>
                          </div>
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
      </div>
    </section>
  );
}
