import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/Hero1.png";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="container h-full">
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.h1
          className="text-8xl font-bold leading-tight text-white font-arimo"
          initial="hidden"
          animate="visible"
          variants={textVariants}>
          {/* <span dangerouslySetInnerHTML={{ __html: text }}></span> */}
          Supporting<br/><span className=" font-kalnia">Entrepreneurs</span> Build<br/>Purposeful <span className=" font-kalnia">Companies</span>
        </motion.h1>
      </motion.div>
      <motion.div
        className="absolute bottom-28 right-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal font-arimo"
          initial="hidden"
          animate="visible"
          variants={textVariants}>
          At Z21 Ventures, we empower purposeful companies with passionate
          founders, a supportive community, and impactful investments—solving
          meaningful problems with scalable solutions.
        </motion.p>
      </motion.div>
      </div>
    </section>
  );
}
