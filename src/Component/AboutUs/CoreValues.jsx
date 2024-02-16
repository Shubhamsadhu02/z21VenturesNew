import { useState, useEffect } from "react";
import InvestmentPhilosophyImg from "../Z21Thesis/images/InvestmentPhilosophyImg.svg";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";

const CoreValues = () => {
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
          <div className="md:w-1/2 text-gray-600 ">
            <div className="pb-4">
              <h1 className="text-black text-4xl md:text-8xl font-semibold mt-4 text-left mb-16 font-arimo">
                Core Values
              </h1>
            </div>
            <img
              src={InvestmentPhilosophyImg}
              alt="Community Circle"
              className="h-auto w-4/5 mt-4"
            />
          </div>
          <div className="mb-8 md:mb-0 md:w-2/5 space-y-20 py-16">
            <div className=" pl-4 ">
              <h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo">
                Be Helpful and Collaborative
              </h1>
              <p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                Be the most helpful venture fund to support early stage startups
                scale Be entrepreneur first and support founders Build the most
                helpful and impactful community to support companies View More
              </p>
            </div>
            <div className=" pl-4 ">
              <h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo">
                Practice Honesty and Integrity
              </h1>
              <p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                Provide all information transparently to the Limited Partners
                (LPs). Clear and regular communication with the LP community  View
                More
              </p>
            </div>
            <div className=" pl-4 ">
              <h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo">
                Strive for excellence
              </h1>
              <p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                Hire and train the best talent Use and practice the best
                technology and processes
              </p>
            </div>
            <div className=" pl-4 ">
              <h1 className="text-black text-4xl font-semibold mt-4 text-left font-arimo">
                Drive Purposefulness
              </h1>
              <p className="text-base md:text-xl border-l-2 border-[#DE5126] pl-4 md:text-left mt-4 md:mt-8 font-arimo">
                Invest with conviction and purpose Be deliberate in decision
                making
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default CoreValues;
