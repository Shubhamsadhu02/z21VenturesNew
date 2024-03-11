import { useState, useEffect } from "react";
import WhoDoWePartnerWithBG from "../Z21Thesis/images/WhoDoWePartnerWithBG.svg";
import Investors from "../Z21Thesis/images/Investors.svg";
import Z21Thesissection3 from "../Z21Thesis/images/Z21Thesissection3.png";
import Investors2 from "../Z21Thesis/images/Investors2.svg";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

const WhoDoWePartnerWith = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const targetPosition = 300;
      if (position > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-screen py-12 md:py-24 px-10 md:px-20 bg-black"
      style={{
        backgroundImage: `url(${Z21Thesissection3})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <motion.h1 className="text-white md:text-6xl lg:text-8xl font-arimo font-semibold text-left mb-32 md:mb-32"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Who do we partner with
            </motion.h1>
            <motion.h2 className="text-base lg:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 font-kalnia"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Startups
            </motion.h2>
            <img
              src={Investors2}
              alt="Startups"
              className=" mt-6 border-b-2 border-white pb-8"
            />
            <motion.p className="text-base md:w-11/12 lg:text-xl md:text-left mt-4 md:mt-8 text-white font-arimo"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Technology focused companies at Pre-seed and Seed stage. z21
              Ventures fosters a vibrant community-driven ecosystem designed to
              empower early-stage startups with strategic guidance, expert
              mentorship, and invaluable connections.
            </motion.p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
            <motion.h2
              className="text-base lg:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 font-kalnia"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Investors
            </motion.h2>
            <img
              src={Investors}
              alt="Investors"
              className=" mt-6 border-b-2 border-white pb-8"
            />
            <motion.p className="text-base md:w-11/12 lg:text-xl md:text-left mt-4 md:mt-8 font-arimo text-white"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Investors across the world who are interested in investing in
              early stage companies. z21 ventures enables them to easily
              diversify their portfolio by investing in a broad array of
              purposeful startups with exceptional teams that are supported by a
              powerful network of LPs, advisors, VCs, accelerators, and industry
              specialists. Become part of a community fostering innovation and
              driving success.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoDoWePartnerWith;
