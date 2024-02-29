import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../FramerAnimation/Framer";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    { title: "Investment Thesis", path: "/thesis", cName: "nav-text" },
    { title: "Community", path: "/community", cName: "nav-text" },
    { title: "Portfolio", path: "/portfolio", cName: "nav-text" },
    { title: "About us", path: "/aboutus", cName: "nav-text" },
    // { title: "Blogs", path: "/blogs", cName: "nav-text" },
  ];

  return (
    <header className="bg-black z-50 w-screen py-4 px-4 md:py-2 md:px-16 fixed">
      <div className="container">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="flex justify-between items-center w-full h-[35px] md:h-[80px]">
            <Link
              to="#"
              className=" text-2xl md:text-5xl"
              onClick={showSidebar}>
              <HiBars2 />
            </Link>
            <div className="logo">
              {!imageLoaded && (
                <span className="text-2xl text-white font-bold">
                  z21 ventures
                </span>
              )}
              <Link to="/" className="navbar-brand">
                <img
                  src={Logo}
                  alt="Logo"
                  className={`h-8 w-28 md:h-11 md:w-44 ${imageLoaded ? "" : "hidden"}`}
                  onLoad={handleImageLoad}
                  onError={() => setImageLoaded(false)}
                />
              </Link>
            </div>
            <div className="contact-nav bg-[#efeff129] hover:bg-[#DE5126] px-4 py-2 md:px-8 md:py-4 rounded-full block">
              <Link
                to="/contact"
                className="text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center">
                Contact us <GoArrowUpRight />
              </Link>
            </div>
          </div>
          <nav
            className={
              sidebar
                ? "nav-menu bg-[#DE5126] w-[100%] md:w-[34%] absolute top-0 left-0 px-16 md:px-16 transition-all duration-300 delay-500"
                : "nav-menu hidden transition-all duration-300 delay-500"
            }>
            <div className="navbar-toggle">
              <Link
                to="#"
                className="ml-4 text-white text-2xl md:text-5xl"
                onClick={showSidebar}>
                <AiOutlineClose />
              </Link>
            </div>
            <ul className="mt-4" onClick={showSidebar}>
              {SidebarData.map((item, index) => (
                <motion.li
                  key={index}
                  className={` py-6 md:py-10 ${
                    index !== SidebarData.length - 1
                      ? "border-b-[1px] border-white"
                      : ""
                  } ${item.cName}`}
                  variants={{ ...fadeInAnimationCompanies }}
                  initial="initial"
                  whileInView="animate"
                  custom={index}>
                  <Link
                    to={item.path}
                    className="text-white text-xl md:text-4xl">
                    <span>{item.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </header>
  );
}
