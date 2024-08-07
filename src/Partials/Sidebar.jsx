import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { fadeInAnimationCompanies } from "../FramerAnimation/Framer";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const showSidebar = () => setSidebar(!sidebar);
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const SidebarData = [
    { title: "Home", path: "/", cName: "nav-text" },
    { title: "Investment Thesis", path: "/thesis", cName: "nav-text" },
    { title: "Community", path: "/community", cName: "nav-text" },
    { title: "Portfolio", path: "/portfolio", cName: "nav-text" },
    { title: "About Us", path: "/aboutus", cName: "nav-text" },
    { title: "Blogs", path: "/blogs", cName: "nav-text" },
  ];

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <header className="bg-black z-50 w-screen py-4 px-4 md:py-2 md:px-16 fixed">
        <div className="container">
          <div className="flex justify-between items-center w-full h-[35px] md:h-[80px]">
            <Link
              to="#"
              className=" text-4xl md:text-5xl"
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
                  className={`h-8 w-32 md:h-11 md:w-44 ${imageLoaded ? "" : "hidden"}`}
                  onLoad={handleImageLoad}
                  onError={() => setImageLoaded(false)}
                />
              </Link>
            </div>
            <Link to="/contact" className=" hidden md:block">
              <button className="contact-nav bg-[#efeff129] hover:bg-[#DE5126] px-4 py-2 md:px-8 md:py-4 rounded-full text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center">
                Contact Us <GoArrowUpRight className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </header>
      <nav
        className={
          sidebar
            ? "nav-menu bg-[#DE5126] w-[100%] md:w-1/2 lg:w-[34%] h-screen fixed overflow-y-auto top-0 left-0 z-50 px-8 md:px-16 pb-16 transition-all duration-300 delay-500"
            : "nav-menu hidden transition-all duration-300 delay-500"
        }
        ref={sidebarRef}>
        <div className="navbar-toggle">
          <Link
            to="#"
            className="ml-4 text-white text-2xl lg:text-4xl"
            onClick={showSidebar}>
            <AiOutlineClose />
          </Link>
        </div>
        <ul className="mt-2 h-full" onClick={showSidebar}>
          {SidebarData.map((item, index) => (
            <motion.li
              key={index}
              className={` py-5 md:py-7 lg:py-10 ${index !== SidebarData.length - 1 ? "border-b border-white" : ""} ${item.cName}`}
              variants={{ ...fadeInAnimationCompanies }}
              initial="initial"
              whileInView="animate"
              custom={index}>
              <Link
                to={item.path}
                className="text-white font-arimo text-lg md:text-2xl">
                <span>{item.title}</span>
              </Link>
            </motion.li>
          ))}
          <motion.li className="py-5 border-t border-white block md:hidden"
            variants={{ ...fadeInAnimationCompanies }}
            initial="initial"
            whileInView="animate"
            custom={SidebarData.length}>
            <Link to={"/contact"} className="text-white font-arimo text-lg md:text-2xl">
              <span>Contact Us</span>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
