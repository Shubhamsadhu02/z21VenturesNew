import { useState, useEffect } from "react";
import InvestmentPhilosophyImg from "../Z21Thesis/images/InvestmentPhilosophyImg.svg";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import OurDifferentiation1 from "../Z21Thesis/images/OurDifferentiation1.svg";
import OurDifferentiation2 from "../Z21Thesis/images/OurDifferentiation2.svg";
import OurDifferentiation3 from "../Z21Thesis/images/OurDifferentiation3.svg";
import OurDifferentiation4 from "../Z21Thesis/images/OurDifferentiation4.svg";

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
          <div className="md:w-1/2 text-gray-600 pl-8">
            <div className=""> {/* Add padding-bottom here */}</div>
            <div className="">
              <img
                src={OurDifferentiation1}
                alt="Community Circle"
                className="h-auto w-2/6 mt-4"
              />
              <h1
                className="text-4xl text-black font-semibold mt-4"
                style={{ fontFamily: "Arimo" }}>
                Z21 Community
              </h1>
              <p
                className="text-xl w-3/5 border-l-2 border-orange-500 pl-4 md:text-left md:mt-8 mt-4"
                style={{ borderColor: "#DE5126" }}>
                {" "}
                {/* Adjust the border here */}
                Z21 Community is going to be one of the largest communities of
                entrepreneurs, executives, and innovation enthusiasts that will be
                available to help the companies on specific problems and scale. We
                already have a community of over 120 advisors who are experts
                across the spectrum.
              </p>
            </div>
            <div className="mt-32">
              <img
                src={OurDifferentiation2}
                alt="Community Circle"
                className="h-auto w-2/6 mt-4"
              />
              <h1
                className="text-4xl text-black font-semibold mt-4"
                style={{ fontFamily: "Arimo" }}>
                Z21 Leadership Summit
              </h1>
              <p
                className="text-xl w-3/5 border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8 mt-4"
                style={{ borderColor: "#DE5126" }}>
                {" "}
                {/* Adjust the border here */}
                Held at the SF Bay area every year, Z21 Leadership Summit will get
                portfolio leaders across the world to come meet executives from
                hundreds of tech companies.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 text-gray-600 pl-16">
            <div className="">
              {" "}
              {/* Add padding-bottom here */}
              <h1
                className="text-black text-7xl font-semibold mt-4 text-left mb-16"
                style={{ fontFamily: "Arimo" }}>
                Our differentiation
              </h1>
            </div>
            <div className="pl-8">
              <img
                src={OurDifferentiation3}
                alt="Community Circle"
                className="h-auto w-2/6 mt-4"
              />
              <h1
                className="text-4xl text-black font-semibold mt-4"
                style={{ fontFamily: "Arimo" }}>
                Z21 Investor Partnerships
              </h1>
              <p
                className="text-xl w-3/5 border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8 mt-4"
                style={{ borderColor: "#DE5126" }}>
                {" "}
                {/* Adjust the border here */}
                Z21 will have partnerships with hundreds of later stage investors
                and will facilitate introductions for later stage investments.
              </p>
            </div>
            <div className="pl-8 mt-32">
              <img
                src={OurDifferentiation4}
                alt="Community Circle"
                className="h-auto w-2/6 mt-4"
              />
              <h1
                className="text-4xl text-black font-semibold mt-4"
                style={{ fontFamily: "Arimo" }}>
                Z21 Corporate Partnerships
              </h1>
              <p
                className="text-xl w-3/5 border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8 mt-4"
                style={{ borderColor: "#DE5126" }}>
                {" "}
                {/* Adjust the border here */}
                Z21 will have partnerships with hundreds of Corporate Development
                teams across the world to facilitate partnerships for portfolio
                companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
