import { useState, useEffect } from "react";
import InvestmentPhilosophyImg from "../Z21Thesis/images/InvestmentPhilosophyImg.svg";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";

const InvestmentPhilosophy = () => {
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
    <section
      className="w-screen py-24 px-20"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/5">
            <p
              className="text-xl border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8"
              style={{ borderColor: "#DE5126" }}>
              {" "}
              {/* Adjust the border here */}
              Z21 Ventures fuels its early-stage tech investments with a unique
              community engine. Diverse members within this network generate a
              constant stream of promising deals, while a thematically focused
              approach ensures backing the most impactful opportunities.
              Initially, we'll zoom in on the India-US corridor, empowering
              companies to tap into India's vast talent pool or unlock the booming
              Indian market. But funding is just the first spark. Early startups
              crave the sage advice of seasoned veterans to illuminate their path.
              <br /> <br />
              Z21 Ventures bridges this gap by building a robust community of
              experienced advisors, personally invested in the fund and eager to
              guide your journey. We identify promising gems, nurture their growth
              with the power of our community, and stay by your side as your
              success story unfolds.
            </p>
          </div>
          <div className="md:w-1/2 text-gray-600 pl-16">
            <div className="pb-4">
              {" "}
              {/* Add padding-bottom here */}
              <h1
                className="text-black text-7xl font-semibold mt-4 text-left mb-16"
                style={{ fontFamily: "Arimo" }}>
                Investment philosophy
              </h1>
            </div>
            <img
              src={InvestmentPhilosophyImg}
              alt="Community Circle"
              className="h-auto w-4/5 mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
