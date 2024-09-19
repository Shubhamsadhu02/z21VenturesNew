import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import { fetchBlogs } from "../../Helpers/Api";
// import JyotikaAndRaj from "../Home/images/feature/JyotikaAndRaj.jpg";
import ET from "../Home/images/feature/ET.jpg";
// import Blog1 from './images/blog1.png';

export default function Hero() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((result) => {
        setBlogs(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  // If there are no blogs fetched, render loading spinner
  if (loading) {
    return (
      <section className="w-screen h-screen flex justify-center items-center bg-black">
        <InfinitySpin
          visible={true}
          width="200"
          color="#DE5126"
          ariaLabel="infinity-spin-loading"
        />
      </section>
    );
  }

  // If there are blogs fetched, display the first blog post
  const firstBlog = blogs[0];

  return (
    <section className="w-screen py-16 md:py-40 px-5 md:px-20 mt-12 bg-black">
      {/* <div className="container">
        <div className="flex">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full lg:w-2/5 h-60 md:h-96 bg-white p-16 flex justify-center items-center max-w-sm border border-gray-200 rounded-lg  lg:mx-12">
              <img src={EconomicTimes} alt="Economic Times" className="" />
            </div>
            <div className="md:w-1/2 md:pl-16">
              <p className=" text-base lg:text-2xl font-normal font-kalnia text-[#DE5126]">
                New
              </p>
              <h1 className="text-white mt-4 text-2xl lg:text-6xl font-semibold font-arimo overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-3">
                {firstBlog.title.rendered}
              </h1>
              <Link
                to={`/blog/${firstBlog.slug}`}
                target="__blank"
                className="text-base lg:text-lg font-semibold font-arimo flex items-center mt-8 text-[#DE5126]">
                Read More <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="flex">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full lg:w-1/2 flex justify-center items-center rounded-lg lg:mx-12">
              <img
                src={ET}
                alt="Economic Times"
                className="border border-gray-200"
              />
            </div>
            <div className="w-full lg:w-3/5 md:pl-16">
              <p className=" text-base lg:text-2xl font-normal font-kalnia text-[#DE5126]">
                Featured in Economic Times
              </p>
              <h1 className=" mt-4 text-2xl text-white lg:text-3xl xl:text-6xl font-semibold font-arimo">
                Early-stage VC z21 Ventures raises $20 million in first close of
                second fund
              </h1>
              <div className="flex mt-8 lg:mt-12">
                <Link
                  to={
                    "https://economictimes.indiatimes.com/tech/funding/early-stage-vc-z21-ventures-raises-20-million-in-first-close-of-second-fund/articleshow/113489365.cms?UTM_Source=Google_Newsstand&UTM_Campaign=RSS_Feed&UTM_Medium=Referral"
                  }
                  target="framename"
                  rel="noopener noreferrer"
                  className="text-white text-sm lg:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-3 py-2 lg:px-6 lg:py-4 rounded-full"
                >
                  Read More <MdArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
