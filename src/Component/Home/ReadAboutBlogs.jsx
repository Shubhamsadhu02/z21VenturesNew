import { useState, useEffect } from "react";
import PowerOfCommunityBG from "../../assets/PowerOfCommunityBG.svg";
import Illustration from "./images/Illustration.svg";
import { MdArrowOutward } from "react-icons/md";

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
    <section className="w-screen py-24 px-20" style={backgroundStyle}>
      <div className="container">
        <div className="w-full md:flex md: md:justify-between relative">
          {" "}
          {/* Make sure content is positioned above the background */}
          <div className="md:w-1/2 text-gray-600">
            <h2
              className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4">
              Latest Blogs
            </h2>
            <div className="pb-4">
              <h1 className="text-black text-7xl font-semibold mt-4 text-left w-4/6">
                Read about our latest updates
              </h1>
            </div>
            <a href="#more" className="text-lg font-semibold flex mt-4 group-hover:text-[#DE5126]">
              View Blogs <MdArrowOutward />
            </a>
          </div>
          <div className="mb-8 md:mb-0 w-1/2 pl-20 border-l-2 border-[#CED0D4] group">
            <img
              src={Illustration}
              alt="Community Circle"
              className="h-auto w-full mt-4"
            />
            <div className="flex flex-row mt-8">
              <h1 className="mr-4 w-1/2 text-[32px] font-semibold group-hover:text-[#DE5126]">Funding Announcement</h1>
              <div className="w-1/2">
                <p className="text-lg font-normal mt-4 md:mt-0">
                  Z21 Ventures, an early stage venture fund with a vision to
                  democratize early stage funding, is delighted to announce the
                  launch of Z21...
                </p>
                <a href="#more" className="text-lg font-semibold flex mt-4 group-hover:text-[#DE5126]">
                  View More <MdArrowOutward />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadAboutBlogs;
