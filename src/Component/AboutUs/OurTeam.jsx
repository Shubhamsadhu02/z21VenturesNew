import React, { useState } from "react";
import TeamBg from "../AboutUs/images/OurTeam/Bg.png";
import { RxCross2 } from "react-icons/rx";

import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";
import { ImLinkedin } from "react-icons/im";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ourTeam from "../../data/OurTeam";

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const openModal = (index) => {
    setSelectedMember(ourTeam[index]);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section
      className="w-screen py-12 md:py-24 px-5 md:px-20 bg-no-repeat bg-cover font-arimo bg-center"
      style={{ backgroundImage: `url(${TeamBg})` }}>
      <div className="container">
        <motion.h1
          className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold mb-16 font-arimo"
          initial="hidden"
          whileInView="visible"
          variants={{ ...textVariants }}>
          Our Team
        </motion.h1>
        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-16">
          {ourTeam.map((item, index) => {
            return (
              <div
                key={index}
                className="group p-5 hover:shadow-lg rounded-md cursor-pointer"
                onClick={() => openModal(index)}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className=" grayscale w-96"
                />
                <h4 className="text-xl md:text-3xl font-bold font-arimo mt-6 border-b-[1px] border-[#CED0D4] pb-4">
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
          <div className="fixed top-0 md:top-6 lg:top-0 left-0 w-full h-full bg-[#fff] flex justify-center items-center z-20">
            <div className=" p-6 md:p-16 rounded-md w-11/12 h-5/6">
              <div className="text-end">
                <button onClick={closeModal} className="text-4xl mb-10">
                  <RxCross2 />
                </button>
              </div>
              <motion.div
                className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full overflow-y-auto hide-scrollbar"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                <div className="w-full lg:w-2/5">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-96"
                  />
                </div>
                <div className="w-full lg:w-3/5 mt-4 lg:mt-0 ml-6">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold font-arimo border-b-2 border-[#CED0D4] pb-4 mb-4">
                    {selectedMember.name}
                  </h2>
                  <p className="text-base lg:text-xl font-normal font-arimo text-[#60646C]">
                    {selectedMember.designation}
                  </p>
                  <p className=" pt-10 text-base lg:text-xl font-normal font-arimo">
                    {selectedMember.description}
                  </p>
                  <div className="flex justify-end mt-9">
                    <Link
                      to={selectedMember.linkedin}
                      target="framename"
                      rel="noopener noreferrer"
                      className="text-xl lg:text-2xl flex items-center justify-center font-normal text-[#60646C] hover:text-[#DE5126]">
                      <ImLinkedin className="mr-2" />
                      <p className="flex text-base font-arimo lg:text-lg font-medium items-center">
                        Linkedin Profile <MdArrowOutward className="ml-1" />
                      </p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
