import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/Hero1.png";
import { textVariants } from "../../FramerAnimation/Framer";

export default function Home() {
  const [text, setText] = useState("");
  const fullText =
    "Supporting<br/>Entrepreneurs Build<br/>Purposeful Companies";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-screen bg-black bg-no-repeat bg-cover bg-center py-16 md:py-32 px-10 md:px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="container h-full">
        <motion.div className="w-full">
          <motion.h1
            className=" text-4xl md:text-7xl font-bold leading-[100%] text-white font-arimo"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            {/* <span dangerouslySetInnerHTML={{ __html: text }}></span> */}
            Supporting
            <br />
            Entrepreneurs Build
            <br />
            Purposeful Companies
          </motion.h1>
        </motion.div>
        <motion.div className="absolute bottom-28 right-20">
          <motion.p
            className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal font-arimo"
            initial="hidden"
            animate="visible"
            variants={{ ...textVariants }}>
            z21 Ventures believes purposeful companies are built by combining
            passionate entrepreneurs with a supportive community of successful
            operators and investors.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
