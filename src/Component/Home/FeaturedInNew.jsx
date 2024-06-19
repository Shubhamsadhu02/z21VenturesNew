import React from "react";

import EconomicTimes from "./images/feature/JyotikaAndRaj.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FeaturedInNew() {
  return (
    <>
      <section className="w-screen py-16 md:py-40 px-5 md:px-20 bg-[#EFEFF1] ">
        <div className="container">
          <div className="flex">
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full lg:w-2/5 h-60 md:h-96 bg-white flex justify-center items-center max-w-sm border border-gray-200 rounded-lg  lg:mx-12">
                <img src={EconomicTimes} alt="Economic Times" className="" />
              </div>
              <div className="w-full lg:w-3/5 md:pl-16">
                <p className=" text-base lg:text-2xl font-normal font-kalnia text-[#DE5126]">
                  Featured in Economic Times
                </p>
                <h1 className=" mt-4 text-2xl lg:text-7xl font-semibold font-arimo">
                  Early-stage VC Z21 Ventures planning $40 million second fund
                </h1>
                <div className="flex mt-8 lg:mt-12">
                  <Link
                    to={
                      "https://economictimes.indiatimes.com/tech/funding/early-stage-vc-z21-ventures-planning-40-million-second-fund/articleshow/111064968.cms"
                    }
                    target="framename"
                    rel="noopener noreferrer"
                    className="text-white text-sm md:text-lg font-arimo font-semibold flex justify-center items-center bg-[#DE5126] px-3 py-2 md:px-6 md:py-4 rounded-full">
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
