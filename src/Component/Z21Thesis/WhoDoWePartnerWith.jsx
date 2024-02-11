import { useState, useEffect } from "react";
import WhoDoWePartnerWithBG from "../Z21Thesis/images/WhoDoWePartnerWithBG.svg";
import Investors from "../Z21Thesis/images/Investors.svg";

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
    <div
      className={`w-full min-h-screen px-8 py-32 md:px-16 lg:px-16 flex justify-center items-start transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${WhoDoWePartnerWithBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "100px", // Adjust the padding-top here
      }}>
      <div className="w-full md:flex md:items-start">
        {" "}
        {/* Change from center to start */}
        <div className="md:w-1/2 text-gray-600 ">
          <h1
            className="text-black text-7xl font-semibold mt-4 text-left mb-16"
            style={{ fontFamily: "Arimo", color: "#EFEFF1" }}>
            Who do we partner with
          </h1>
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 "
            style={{ fontFamily: "Kalnia" }}>
            Startups
          </h2>
          <img
            src={Investors}
            alt="Startups"
            className="h-auto w-4/5 mt-4"
            style={{ borderBottom: "1px solid white", paddingBottom: "24px" }}
          />
          <p
            className="text-xl md:text-left md:mt-8"
            style={{ color: "#EFEFF1", fontFamily: "Arimo" }}>
            Technology focused companies at Pre-seed and Seed stage. Z21
            Ventures fosters a vibrant community-driven ecosystem designed to
            empower early-stage startups with strategic guidance, expert
            mentorship, and invaluable connections.
          </p>
        </div>
        <div className="md:w-1/2 text-gray-600 pl-16">
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 "
            style={{ fontFamily: "Kalnia" }}>
            Investors
          </h2>
          <img
            src={Investors}
            alt="Investors"
            className="h-auto w-4/5 mt-4"
            style={{ borderBottom: "1px solid white", paddingBottom: "24px" }}
          />
          <p
            className="text-xl md:text-left md:mt-8"
            style={{ color: "#EFEFF1", fontFamily: "Arimo" }}>
            Investors across the world who are interested in investing in early
            stage companies. Z21 ventures enables them to easily diversify their
            portfolio by investing in a broad array of purposeful startups with
            exceptional teams that are supported by a powerful network of LPs,
            advisors, VCs, accelerators, and industry specialists. Become part
            of a community fostering innovation and driving success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoDoWePartnerWith;
