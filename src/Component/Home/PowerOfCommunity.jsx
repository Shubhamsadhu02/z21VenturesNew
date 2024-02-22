import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.png";
import PowerOfCommunityImg from "../../assets/PowerOfCommunity.svg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

const PowerOfCommunity = () => {
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
    <section className="w-screen py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full ">
          <div className=" text-gray-600">
            <motion.h2 className="text-base md:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4 font-kalnia"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              Community
            </motion.h2>
            <div className="pb-4">
              <motion.h1 className="text-black text-4xl md:text-8xl font-semibold mt-4 text-left font-arimo"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                The power of
                <br /> community
              </motion.h1>
            </div>
          </div>
          <div className="md:flex justify-between mt-24">
            <div className="md:w-2/5">
              <img
                src={PowerOfCommunityImg}
                alt="Community Circle"
                className="h-auto w-4/5 mt-4"
              />
            </div>
            <motion.div className=" md:w-2/5"
              initial="hidden"
              whileInView="visible"
              variants={{ ...textVariants }}>
              <p className=" text-base md:text-xl font-normal border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                We bring institutional investors, corporates, and academic
                institutions into the fold, creating a diverse and impactful
                community for our portfolio companies to thrive in. Z21 Ventures
                fosters a vibrant community-driven ecosystem designed to empower
                early-stage startups with strategic guidance, expert mentorship, and
                invaluable connections.
              </p>
              <Link to={""} className=" text-base md:text-lg font-semibold mt-4 flex items-center font-arimo">
                View More <MdArrowOutward />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfCommunity;
