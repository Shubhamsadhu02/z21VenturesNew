import React from "react";

import ET from "../Home/images/feature/ET.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FeaturedInNew() {
  return (
    <>
      <section className="w-screen py-16 md:py-40 px-5 md:px-20 bg-[#EFEFF1] ">
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
              <p className=" text-base xl:text-2xl font-normal font-kalnia text-[#DE5126]">
                Featured in Economic Times
              </p>
              <h1 className=" mt-4 text-2xl text-black lg:text-3xl xl:text-6xl font-semibold font-arimo">
                Early-stage VC z21 Ventures raises $20 million in first close of
                second fund
              </h1>
              <div className="flex mt-8 xl:mt-12">
                <Link
                  to={
                    "https://economictimes.indiatimes.com/tech/funding/early-stage-vc-z21-ventures-raises-20-million-in-first-close-of-second-fund/articleshow/113489365.cms?UTM_Source=Google_Newsstand&UTM_Campaign=RSS_Feed&UTM_Medium=Referral"
                  }
                  target="framename"
                  rel="noopener noreferrer"
                  className="text-white text-sm lg:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-3 py-2 xl:px-6 xl:py-4 rounded-full"
                >
                  Read More <MdArrowOutward />
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
