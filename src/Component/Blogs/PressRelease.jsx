import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Frame from './images/frame.png';

export default function PressRelease() {

    const slide = [
        {

            header: "z21 Ventures has been a game changer for us",
            description:
                "z21 Ventures has been a game-changer for us. Their strategic investments and unwavering support propelled our startup to new heights. Truly a visionary partner!",
            name: "Nikunj Bajaj | CEO - Truefoundary",
            link: "https://www.linkedin.com/in/nikunj-bajaj-10476824/",
        },
        {

            header: "It has been an enriching experience",
            description:
                "Being part of the z21 community has been an enriching experience. The collaborative environment, coupled with z21's insightful guidance, has played a crucial role in our journey of innovation and success",
            name: "Sushant Gupta | CEO - Meomind",
            link: "https://www.linkedin.com/in/sushantgupta1/",
        },
        {

            header: "z21 Ventures has been a game changer for us",
            description:
                "z21 Ventures has been a game-changer for us. Their strategic investments and unwavering support propelled our startup to new heights. Truly a visionary partner!",
            name: "Nikunj Bajaj | CEO - Truefoundary",
            link: "https://www.linkedin.com/in/nikunj-bajaj-10476824/",
        },
        {

            header: "It has been an enriching experience",
            description:
                "Being part of the z21 community has been an enriching experience. The collaborative environment, coupled with z21's insightful guidance, has played a crucial role in our journey of innovation and success",
            name: "Sushant Gupta | CEO - Meomind",
            link: "https://www.linkedin.com/in/sushantgupta1/",
        },
    ]
    return (
        <>
            <section className='w-screen h-auto py-12 md:py-24 px-5 md:px-20 bg-[#DE5126]'>
                <div className="container">
                    <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold">
                        Press Release
                    </h2>

                    <div className="my-12 md:my-24">
                        <Swiper slidesPerView={4}
                            spaceBetween={30}
                            // loop={true}
                            centeredSlides={true}
                            // modules={[Autoplay]}
                            // autoplay={{
                            //     delay: 3500,
                            //     disableOnInteraction: true,
                            //     infinite: true,
                            // }}
                            className="mySwiper">
                            {
                                <div className="">
                                    {slide.map((ele, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="bg-white">
                                                    <div className="">
                                                        <img src={Frame} alt="" />
                                                    </div>
                                                    <div className="">
                                                        <p>Bay Area based VC fund z21 Ventures deploys it’s first fund in 25+ companies</p>
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
