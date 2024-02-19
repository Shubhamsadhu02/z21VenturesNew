import { useState, useEffect } from "react";
import Illustration from "../Home/./images/Illustration.svg";
import HomeBackgroundBG from "../Home/images/HomeBlogbg.png";

import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

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

  return (
    <section className="w-screen relative overflow-hidden">
      <div className="" style={{
              backgroundImage: 'linear-gradient(180deg, #FBE9E4 0%, #F1B09D 100%)',
              filter: `blur(297px)`,
              width: '480px',
              height: '480px',
              position: 'absolute',
              bottom: '0',
              borderRadius: "50%"
            }}></div>
      <div className="container">
        <div className="w-full md:flex md: md:justify-between">
          <div className="py-12 md:py-24 pl-10 md:pl-10 md:w-1/2 text-gray-600 bg-no-repeat bg-cover bg-center" >
            {/* style={{
               backgroundImage: `url(${HomeBackgroundBG})`,
            }}> */}
            <h2 className="text-base md:text-lg font-semibold uppercase font-kalnia tracking-wider text-left text-orange-500 mb-4">
              Latest Blogs
            </h2>
            <div className="pb-4">
              <h1 className="text-black font-arimo text-4xl md:text-8xl font-semibold mt-4 text-left">
                Read about our latest updates
              </h1>
            </div>
            <Link
              to={"/blogs"}
              className="text-base md:text-lg font-arimo font-semibold flex items-center mt-4 group-hover:text-[#DE5126]">
              View Blogs <MdArrowOutward />
            </Link>
          </div>
          <div className="py-12 md:py-24 pr-10 md:pr-20 pl-10 mb-8 md:mb-0 md:w-1/2 md:pl-20 md:border-l-2 border-l-2 md:border-[#CED0D4] group">
            <img
              src={Illustration}
              alt="Community Circle"
              className="h-auto w-full mt-4"
            />
            <div className="md:flex flex-row mt-8">
              <h1 className="mr-4 md:w-1/2 text-3xl font-semibold group-hover:text-[#DE5126]">
                Funding Announcement
              </h1>
              <div className="md:w-1/2">
                <p className="text-base md:text-lg font-normal mt-4 md:mt-0">
                  Z21 Ventures, an early stage venture fund with a vision to
                  democratize early stage funding, is delighted to announce the
                  launch of Z21...
                </p>
                <Link
                  href="#more"
                  className="text-base md:text-lg font-semibold mt-4 flex group-hover:text-[#DE5126] items-center font-arimo">
                  View More <MdArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadAboutBlogs;
