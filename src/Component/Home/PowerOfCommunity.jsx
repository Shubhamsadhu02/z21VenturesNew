import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import PowerOfCommunityImg from "../../assets/PowerOfCommunity.svg";

const PowerOfCommunity = () => {
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
        backgroundImage: `url(${PowerOfCommunityBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-full md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 text-gray-600">
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4"
            style={{ fontFamily: "Kalnia" }}>
            Community
          </h2>
          <div className="pb-4">
            {" "}
            {/* Add padding-bottom here */}
            <h1
              className="text-black text-7xl font-semibold mt-4 text-left"
              style={{ fontFamily: "Arimo" }}>
              The power of
              <br /> community
            </h1>
          </div>
          <img
            src={PowerOfCommunityImg}
            alt="Community Circle"
            className="h-auto w-4/5 mt-4"
          />
        </div>
        <div className="mb-8 md:mb-0 md:w-2/5">
          <p
            className="text-xl border-l-2 border-orange-500 pl-4 md:text-left mt-4 md:mt-8"
            style={{ borderColor: "#DE5126" }}>
            {" "}
            {/* Adjust the border here */}
            We bring institutional investors, corporates, and academic
            institutions into the fold, creating a diverse and impactful
            community for our portfolio companies to thrive in. Z21 Ventures
            fosters a vibrant community-driven ecosystem designed to empower
            early-stage startups with strategic guidance, expert mentorship, and
            invaluable connections.
          </p>
          <a href="#more" className="text-blue-600 text-sm mt-4 inline-block">
            View More ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default PowerOfCommunity;
