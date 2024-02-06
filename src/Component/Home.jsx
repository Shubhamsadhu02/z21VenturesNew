import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/Hero1.png";

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

  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <div
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <motion.div
        className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white"
          style={fontStyles}
          initial="hidden"
          animate="visible"
          variants={textVariants}>
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </motion.h1>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 pb-8 pr-8 md:pb-16 md:pr-16 lg:pb-24 lg:pr-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal"
          style={fontStyles}
          initial="hidden"
          animate="visible"
          variants={textVariants}>
          At Z21 Ventures, we empower purposeful companies with passionate
          founders, a supportive community, and impactful investments—solving
          meaningful problems with scalable solutions.
        </motion.p>
      </motion.div>
    </div>
  );
}
