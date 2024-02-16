import { useState, useEffect } from "react";
import Companies from "../PortfolioCompanies/Companies";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

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
    <section className="w-screen py-12 md:py-24 px-10 md:px-20"
      style={{
        backgroundColor: "#EFEFF1",
      }}>
      <div className="container">
        <div className="w-full md:flex justify-between">
          <div className=" md:w-2/5 mb-8 md:mb-0">
            <p className="text-base md:text-xl font-normal border-l-2 border-[#DE5126] pl-4 md:text-left w-4/6 font-arimo">
              We partner with technology focused companies at Pre-seed and Seed stage.
            </p>
            <Link to={"/portfolio"} className="text-black text-base md:text-lg font-semibold mt-6 flex">
              View More <MdArrowOutward />
            </Link>
          </div>
          <div className="md:w-2/5 text-gray-600">
            <h2 className=" text-base md:text-lg font-semibold uppercase tracking-wider text-orange-500 mb-4 font-kalnia">
              Portfolio
            </h2>
            <div className="pb-4">
              <h1 className="text-black text-4xl md:text-8xl font-semibold mt-4 font-arimo">
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
