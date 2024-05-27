import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import { motion } from 'framer-motion';

import Frame from './images/frame.png';
import Announcement from './images/Announcement icon.png';
import { GoArrowRight } from 'react-icons/go';

export default function PressRelease() {

    const slide = [
        {
            header: "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
            phase: "Phase-1 Announcement",
            link: "",
        },
        {
            header: "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
            phase: "Phase-2 Announcement",
            link: "",
        },
        {
            header: "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
            phase: "Phase-1 Announcement",
            link: "",
        },
        {
            header: "Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies",
            phase: "Phase-1 Announcement",
            link: "",
        },

    ]
    return (
        <>
            <section className='w-screen h-auto py-12 md:py-24 px-5 bg-[#DE5126]'>
                <div className="container">
                    <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold">
                        Press Release
                    </h2>

                    <div className="my-12 md:my-24">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                    centeredSlides: true,
                                    pagination: {
                                        dynamicBullets: true,
                                        clickable: false,
                                        bulletClass: 'press-bullet-class',
                                        bulletActiveClass: 'press-bullet-active-class',
                                        className: "press-bullet-active-class",
                                    },
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                    centeredSlides: true,
                                    pagination: false
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                    centeredSlides: true,
                                    pagination: false
                                },
                            }}
                            className="mySwiper h-[560px] lg:h-auto press-custom-class">
                            {
                                <div className="">
                                    {slide.map((ele, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="bg-white w-[300px] sm:w-[350px] lg:w-[455px] xl:w-[580px] overflow-hidden group">
                                                    <div className="">
                                                        <img src={Frame} alt="" className=' w-[580px] h-[230px] lg:h-[300px] xl:h-[440px] transform transition-transform duration-300 group-hover:scale-105' />
                                                    </div>
                                                    <div className=" bg-black flex items-center justify-center p-2 rounded-r-full w-[210px] lg:w-[276px] relative bottom-6">
                                                        <p className=' font-kalnia text-xs lg:text-base font-medium text-white mr-4'>{ele.phase}</p>
                                                        <img src={Announcement} alt="" className=' w-6 h-6' />
                                                    </div>
                                                    <div className=" p-6 xl:p-12 flex flex-col justify-center">
                                                        <p className=' font-arimo font-medium text-2xl lg:text-4xl overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-3'>{ele.header}</p>
                                                        <Link to={ele.link}>
                                                            <motion.div className=" bg-black group-hover:bg-[#DE5126] flex justify-center items-center w-12 h-12 lg:w-20 lg:h-20 rounded-full mt-8 p-3 lg:p-6 text-xl lg:text-3xl font-semibold text-white">
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
                </div>
            </section>
        </>
    )
}
