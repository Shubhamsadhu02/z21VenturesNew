import { useState, useEffect } from "react";
import Companies from "../PortfolioCompanies/Companies";
import { MdArrowOutward } from "react-icons/md";

const PortfolioCompanies = () => {
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
    <section className="w-screen py-24 px-20"
      style={{
        backgroundColor: "#EFEFF1",
      }}>
      <div className="container">
        <div className="w-full md:flex md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl font-normal border-l-2 border-[#DE5126] pl-4 md:text-left w-4/6">
              We partner with technology focused companies at Pre-seed and Seed stage.
            </p>
            <a href="#more" className="text-black text-lg font-semibold mt-6 flex">
              View More <MdArrowOutward />
            </a>
          </div>
          <div className="md:w-1/2 text-gray-600">
            <h2
              className="text-lg font-semibold uppercase tracking-wider text-orange-500 mb-4"
              style={{ fontFamily: "Kalnia" }}>
              Portfolio
            </h2>
            <div className="pb-4">
              <h1 className="text-black text-7xl font-semibold mt-4"
                style={{ fontFamily: "Arimo" }}>
                Portfolio <br /> companies
              </h1>
            </div>
          </div>
        </div>
        <Companies/>
      </div>
    </section>
  );
};

export default PortfolioCompanies;
