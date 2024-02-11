import { useState, useEffect } from "react";

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
    <div
      className={`w-full min-h-screen px-8 md:px-16 lg:px-20 flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "#EFEFF1",
      }}>
      <div className="w-full md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p
            className="text-xl border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8 w-4/6"
            style={{ borderColor: "#DE5126" }}>
            We partner with technology focused companies at Pre-seed and Seed
            stage.
          </p>
          <a href="#more" className="text-blue-600 text-sm mt-4 inline-block">
            View More ↓
          </a>
        </div>
        <div className="md:w-1/2 text-gray-600">
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-orange-500 mb-4"
            style={{ fontFamily: "Kalnia" }}>
            Portfolio
          </h2>
          <div className="pb-4">
            <h1
              className="text-black text-7xl font-semibold mt-4"
              style={{ fontFamily: "Arimo" }}>
              Portfolio
              <br /> companies
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCompanies;
