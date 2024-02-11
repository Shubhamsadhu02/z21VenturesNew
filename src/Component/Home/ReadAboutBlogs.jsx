import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import Illustration from "./images/Illustration.svg";

const ReadAboutBlogs = () => {
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

  // Apply rotation to the background
  const backgroundStyle = {
    backgroundImage: `url(${PowerOfCommunityBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={`w-full min-h-screen px-8 md:px-16 lg:px-20 flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      {/* Background div */}
      <div className="absolute w-full h-full" style={backgroundStyle} />

      {/* Content div */}
      <div className="w-full md:flex md: md:justify-between relative">
        {" "}
        {/* Make sure content is positioned above the background */}
        <div className="md:w-1/2 text-gray-600">
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4"
            style={{ fontFamily: "Kalnia" }}>
            Latest Blogs
          </h2>
          <div className="pb-4">
            <h1
              className="text-black text-7xl font-semibold mt-4 text-left w-4/6"
              style={{ fontFamily: "Arimo" }}>
              Read about our latest updates
            </h1>
          </div>
        </div>
        <div className="mb-8 md:mb-0 md:w-2/5">
          <img
            src={Illustration}
            alt="Community Circle"
            className="h-auto w-full mt-4"
          />
          <div className="flex flex-row mt-8" style={{ fontFamily: "Arimo" }}>
            <h1 className="mr-4 text-3xl">Funding Announcement</h1>
            <div>
              <p
                className="text-lg pl-4 mt-4 md:mt-0"
                style={{ borderColor: "#DE5126" }}>
                Z21 Ventures, an early stage venture fund with a vision to
                democratize early stage funding, is delighted to announce the
                launch of Z21...
              </p>
              <a href="#more" className="text-blue-600 text-sm inline-block">
                View More ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadAboutBlogs;
