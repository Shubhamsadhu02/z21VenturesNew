import React, { useEffect, useState } from "react";
import { ImLinkedin } from "react-icons/im";

import { Link } from "react-router-dom";
import { fetchCommunities } from "../../Helpers/Api";
// import communityTeamData from "../../data/CommunityTeam";

export default function CommunityTeam() {

  const [community, setCommunity] = useState([]);

  useEffect(() => {
    fetchCommunities()
      .then((result) => {
        setCommunity(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching communities:", error);
      });
  }, []);

  return (
    <section className="w-screen py-12 md:py-24 px-5 md:px-20 bg-no-repeat bg-cover bg-[#EFEFF1] bg-center">
      <div className="container">
        <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-arimo font-semibold mb-8 md:mb-16">
          Diverse community of successful operators
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-5 gap-y-16 mt-8 md:mt-16">
          {community.map((item, index) => {
            return (
              <div
                key={index}
                className="group p-5 hover:shadow-lg rounded-md bg-white flex flex-col justify-between">
                <div className="flex justify-center items-center">
                  <img
                    src={item.acf.image_url}
                    alt={item.acf.name}
                    loading="lazy"
                    className=" grayscale rounded-full w-40 h-40"
                  />
                </div>
                <div className=" h-28 mb-3">
                  <h4 className="text-base lg:text-lg font-bold font-arimo mt-6 border-b-[1px] border-[#CED0D4] pb-3 text-center">
                    {item.acf.name}
                  </h4>
                  <p className=" text-sm lg:text-base font-arimo font-normal text-[#60646C] mt-3 text-center">
                    {item.acf.position}
                  </p>
                </div>
                <Link
                  to={item.acf.linkdln}
                  target="framename"
                  rel="noopener noreferrer"
                  className="">
                  <p className="flex text-base lg:text-lg mt-10 py-2 font-medium items-center font-arimo justify-center text-[#DE5126] bg-[#FDF0ED]">
                    {" "}
                    <ImLinkedin className="mr-3" />
                    Linkedin Profile
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
