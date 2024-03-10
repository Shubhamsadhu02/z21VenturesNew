import React, { useState } from "react";
import TeamBg from "../AboutUs/images/OurTeam/Bg.png";
import { RxCross2 } from "react-icons/rx";

import Abhinav from "../AboutUs/images/OurTeam/Abhinav.png";
import Anand from "../AboutUs/images/OurTeam/Anand.png";
import Ankit from "../AboutUs/images/OurTeam/Ankit.png";
import Dibyendu from "../AboutUs/images/OurTeam/Dibyendu.png";
import Jyotika from "../AboutUs/images/OurTeam/Jyotika.png";
import Raj from "../AboutUs/images/OurTeam/Raj.png";
import Tony from "../AboutUs/images/OurTeam/Tony.png";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";
import { ImLinkedin } from "react-icons/im";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function OurTeam() {
  let ourTeam = [
    {
      image: Raj,
      name: "Raj Shekhar Singh",
      designation: "Co-founder & General Partner",
      linkedin: '',
      description: ''
    },
    {
      image: Abhinav,
      name: "Abhinav Shashank",
      designation: "Co-founder & Investment Advisor",
      linkedin: '',
      description: `CEO and Co-founder of Innovaccer, a healthcare technology company. Innovaccer is one of the largest SaaS companies coming out of India. Abhinav has a BTech from IIT Kharagpur and worked at Ingersoll Rand before starting Innovaccer in 2012.
      CEO and Co-founder of Innovaccer, a healthcare technology company. Innovaccer is one of the largest SaaS companies coming out of India. Abhinav has a BTech from IIT Kharagpur and worked at Ingersoll Rand before starting Innovaccer in 2012.
      CEO and Co-founder of Innovaccer, a healthcare technology company. Innovaccer is one of the largest SaaS companies coming out of India. Abhinav has a BTech from IIT Kharagpur and worked at Ingersoll Rand before starting Innovaccer in 2012.`
    },
    {
      image: Jyotika,
      name: "Jyotika Gupta",
      designation: "Partner",
      linkedin: '',
      description: ''
    },
    {
      image: Ankit,
      name: "Ankit Bhangar",
      designation: "Partner",
      linkedin: '',
      description: ''
    },
    {
      image: Tony,
      name: "Tony Hu",
      designation: "Legal Counsel",
      linkedin: '',
      description: ''
    },
    {
      image: Anand,
      name: "Anand Akela",
      designation: "Venture Advisor",
      linkedin: '',
      description: ''
    },
    {
      image: Dibyendu,
      name: "Dibyendu Rana",
      designation: "Venture Advisor",
      linkedin: '',
      description: ''
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const openModal = (index) => {
    setSelectedMember(ourTeam[index]);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section
      className="w-screen py-12 md:py-24 px-10 md:px-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${TeamBg})` }}>
      <div className="container">
        <motion.h1
          className="text-black text-4xl md:text-8xl font-semibold mb-16 font-arimo"
          initial="hidden"
          whileInView="visible"
          variants={{ ...textVariants }}>
          Our Team
        </motion.h1>
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-[50px] mt-16">
          {ourTeam.map((item, index) => {
            return (
              <div
                key={index}
                className="group p-8 transition duration-300 ease-in-out hover:shadow-lg hover:p-5 rounded-md hover:scale-105 cursor-pointer"
                onClick={() => openModal(index)}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="grayscale group-hover:grayscale-0 w-96"
                />
                <h4 className="text-xl md:text-3xl font-bold font-arimo mt-6 border-b-[1px] border-[#CED0D4] pb-4 group-hover:text-[#DE5126]">
                  {item.name}
                </h4>
                <p className="text-base md:text-xl font-normal text-[#60646C] mt-4">
                  {item.designation}
                </p>
                {/* <div className="">
                  <TeamDescription data={{ image: item.image, linkedin: item.linkedin, name: item.name, designation: item.designation, description: item.description }} />
                </div> */}
              </div>
            );
          })}
        </div>

        {selectedMember && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#EFEFF1] p-16 rounded-md w-11/12 h-full overflow-y-auto">
              <div className="text-end">
                <button onClick={closeModal} className="text-4xl mb-10"><RxCross2 /></button>
              </div>
              <div className="flex w-full">
                <div className=" w-2/5">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-96" />
                </div>
                <div className=" w-3/5 ml-6">
                  <h2 className="text-8xl font-bold font-arimo border-b-2 border-[#CED0D4] pb-4 mb-4">{selectedMember.name}</h2>
                  <p className="text-xl font-normal font-arimo">{selectedMember.designation}</p>
                  <p className=" pt-12 text-xl font-normal font-arimo">{selectedMember.description}</p>
                </div>
              </div>
              <div className="flex justify-end mt-9">
                <Link
                  to={selectedMember.linkedin}
                  target="framename"
                  rel="noopener noreferrer"
                  className="text-xl md:text-3xl flex items-center justify-center font-normal text-[#60646C]">
                  <ImLinkedin className="mr-4" />
                  <p className="flex text-lg font-semibold items-center">Linkedin Profile  <MdArrowOutward /></p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
