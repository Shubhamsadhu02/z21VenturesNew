import React from 'react'
import TeamBg from "../AboutUs/images/OurTeam/Bg.png";

import Abhinav from "../AboutUs/images/OurTeam/Abhinav.png";
import Anand from "../AboutUs/images/OurTeam/Anand.png";
import Ankit from "../AboutUs/images/OurTeam/Ankit.png";
import Dibyendu from "../AboutUs/images/OurTeam/Dibyendu.png";
import Jyotika from "../AboutUs/images/OurTeam/Jyotika.png";
import Raj from "../AboutUs/images/OurTeam/Raj.png";
import Tony from "../AboutUs/images/OurTeam/Tony.png";


export default function OurTeam() {
   let ourTeam = [
    {
        image: Raj,
        name: "Raj Shekhar Singh",
        designation: "General Partner"
    },
    {
        image: Abhinav,
        name: "Abhinav Shashank",
        designation: "General Partner"
    },
    {
        image: Jyotika,
        name: "Jyotika Gupta",
        designation: "Partner"
    },
    {
        image: Ankit,
        name: "Ankit Bhangar",
        designation: "Partner"
    },
    {
        image: Tony,
        name: "Tony Hu",
        designation: "Legal Counsel"
    },
    {
        image: Anand,
        name: "Anand Akela",
        designation: "Venture Advisor"
    },
    {
        image: Dibyendu,
        name: "Dibyendu Rana",
        designation: "Venture Advisor"
    }
   ]
    return (
        <section className="w-screen py-12 md:py-24 px-10 md:px-20 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${TeamBg})` }}>
            <div className="container">
                <h1 className="text-black text-4xl md:text-8xl font-semibold mb-16 font-arimo">
                    Core Values
                </h1>
                <div className="flex flex-wrap md:grid md:grid-cols-3 gap-[50px] mt-16">
                {
                ourTeam.map((item, index) => {
                    return (
                        <div key={index} className="group">
                            <img src={item.image} alt="" className=' mix-blend-luminosity group-hover:mix-blend-normal w-96' />
                            <h4 className='text-xl md:text-3xl font-bold font-arimo mt-6 border-b-[1px] border-[#CED0D4] pb-4 group-h'>{item.name}</h4>
                            <p className='text-base md:text-xl font-normal text-[#60646C] mt-4'>{item.designation}</p>
                        </div>
                    )
                })
            }
                </div>
            </div>
        </section>
    )
}
