import { GoArrowDown } from "react-icons/go";
import { HashLink } from "react-router-hash-link";
import PortfolioCompaniesHero from "./images/PortfolioCompaniesHero.svg";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";
import HeroBg1 from "./images/herobg1.png";
import HeroBg2 from "./images/herobg2.png";

export default function Hero() {
  return (
    <div
      className="relative w-screen bg-black bg-no-repeat bg-cover bg-center pt-32 md:pt-40">
      <div className="container">
        <div className="w-full flex flex-col md:flex-row">
          <div className="px-4 md:px-16 w-1/2 flex items-center">
            <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white w-1/2 font-arimo"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Portfolio Companies
            </motion.h1>
          </div>
          <div className="relative md:initial -bottom-32 md:-bottom-0 left-1/2 md:left-0 w-1/2">
            <img src={HeroBg1} alt="" />
          </div>
        </div>
        <div className="w-full md:flex mt-44 md:mt-28">
          <div className="w-1/2">
            <img src={HeroBg2} alt="" />
          </div>
          <div className=" w-full md:w-1/2">
            <div className="">
              <motion.p className="text-base md:text-lg lg:text-xl text-white font-normal font-arimo pl-4 md:pl-20 md:w-3/4 relative md:initial bottom-96 md:bottom-0"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                We work with passionate founders tackling meaningful problems and building highly scalable solutions that benefit users, employees, and the world at large.
              </motion.p>
            </div>
            <HashLink to={"#companies"} smooth>
              <div className=" bg-[#DE5126] absolute bottom-20 md:bottom-4 lg:bottom-20 right-4 md:right-4 lg:right-28 rounded-full p-3 md:p-6 text-xl md:text-3xl text-white">
                <GoArrowDown />
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
