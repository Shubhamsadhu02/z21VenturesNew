import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    textVariants,
    fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";
import { useState, useEffect } from "react";

import TOI from "./images/feature/toi.png";
import NYTimes from "./images/feature/nytimes.png";
import EconomicTimes from "./images/feature/economictimes.png";
import BusinessInsider from "./images/feature/business Insider.png";

export default function Featured() {
    let companieslogo = [
        {
            image: TOI,
        },
        {
            image: NYTimes,
        },
        {
            image: BusinessInsider,
        },
        {
            image: EconomicTimes,
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
                        <Link
                            to={"/"}
                            className="text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-6 py-4 rounded-full">
                            Read More <MdArrowOutward />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-[30px] mt-16">
                    {companieslogo.map((item, index) => {
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
            </div>
        </section>
    )
}
