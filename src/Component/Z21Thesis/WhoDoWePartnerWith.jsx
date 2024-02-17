import { useState, useEffect } from "react";
import WhoDoWePartnerWithBG from "../Z21Thesis/images/WhoDoWePartnerWithBG.svg";
import Investors from "../Z21Thesis/images/Investors.svg";
import Investors1 from "../Z21Thesis/images/Investors2.svg";

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
    <section className="w-screen py-12 md:py-24 px-10 md:px-20 bg-black">
      <div className="container">
        <div className="w-full md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-white md:text-8xl font-arimo font-semibold text-left mb-32 md:mb-32">
              Who do we partner with
            </h1>
            <h2 className="text-base md:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 font-kalnia">
              Startups
            </h2>
            <img
              src={Investors1}
              alt="Startups"
              className=" mt-4"
              style={{ borderBottom: "1px solid white", paddingBottom: "24px" }}
            />
            <p className="text-base md:text-xl md:text-left mt-4 md:mt-8 text-white font-arimo">
              Technology focused companies at Pre-seed and Seed stage. Z21
              Ventures fosters a vibrant community-driven ecosystem designed to
              empower early-stage startups with strategic guidance, expert
              mentorship, and invaluable connections.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
            <h2
              className="text-base md:text-lg font-semibold uppercase tracking-wider text-left text-orange-500 "
              style={{ fontFamily: "Kalnia" }}>
              Investors
            </h2>
            <img
              src={Investors}
              alt="Investors"
              className=" mt-4"
              style={{ borderBottom: "1px solid white", paddingBottom: "24px" }}
            />
            <p className="text-base md:text-xl md:text-left mt-4 md:mt-8 font-arimo text-white">
              Investors across the world who are interested in investing in
              early stage companies. Z21 ventures enables them to easily
              diversify their portfolio by investing in a broad array of
              purposeful startups with exceptional teams that are supported by a
              powerful network of LPs, advisors, VCs, accelerators, and industry
              specialists. Become part of a community fostering innovation and
              driving success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoDoWePartnerWith;
