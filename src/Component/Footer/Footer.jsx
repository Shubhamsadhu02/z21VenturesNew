import React from "react";
import FooterBG from "../Footer/Footer.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
  footeerImgVariants,
} from "../../FramerAnimation/Framer";

export default function Footer() {
  const footerList = [
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "z21 Thesis",
      link: "/thesis",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Community",
      link: "/community",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <section
      className="w-screen pt-12 md:pt-24 border-t-2 md:border-[#CED0D4] "
      style={{ background: "EFEFF1" }}>
      <div className="container relative">
        <div className="w-full flex md:justify-end px-10 md:px-20 mb-16 md:mb-28">
          <motion.ul className="md:flex md:justify-between w-2/3">
            {footerList.map((item, index) => {
              return (
                <Link to={item.link}>
                  <motion.li
                    className="border-l-2 border-[#DE5126] pl-4 text-base md:text-xl font-arimo font-semibold mb-3"
                    variants={{ ...fadeInAnimationCompanies }}
                    initial="initial"
                    whileInView="animate"
                    custom={index}>
                    {item.name}
                  </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </div>
        <div className=" absolute right-0 bottom-20 md:bottom-1/3 px-10 md:px-20">
          <motion.p
            className="text-base md:text-xl font-arimo font-semibold"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            © Copyright | Z21 Ventures
          </motion.p>
        </div>
        <motion.div
          className="mb-3"
          initial="hidden"
          whileInView="visible"
          variants={{ ...footeerImgVariants }}>
          <img src={FooterBG} alt="Footer" />
        </motion.div>
      </div>
    </section>
  );
}
