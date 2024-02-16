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
      className="w-screen py-12 md:py-24 px-10 md:px-20"
      style={{
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="w-full md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/5">
            <p className="text-base md:text-xl font-arimo border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8">
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
          <div className="md:w-1/2 text-gray-600 md:pl-16">
            <div className="pb-4">
              <h1 className="text-black text-4xl md:text-8xl font-arimo font-semibold mt-4 text-left md-8 md:mb-16">
                Investment philosophy
              </h1>
            </div>
            <img
              src={InvestmentPhilosophyImg}
              alt="Community Circle"
              className="h-auto w-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
