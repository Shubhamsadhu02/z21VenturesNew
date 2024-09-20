import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";
import { RxCross2 } from "react-icons/rx";
import { fetchPortfolio } from "../../Helpers/Api";
import { InfinitySpin } from "react-loader-spinner";
import { MdArrowOutward } from "react-icons/md";

export default function Companies() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchPortfolio()
        .then((result) => {
          setPortfolio(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching companies:", error);
          setLoading(false);
        });
    }, []);
  
    const [selectedCompany, setSelectedCompany] = useState(null);
    const openModal = (index) => {
      setSelectedCompany(portfolio[index]);
    };
  
    const closeModal = () => {
      setSelectedCompany(null);
    };

  return (
    <>
    {loading ? (
            <>
              <section className="w-screen flex justify-center items-center">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#DE5126"
                  ariaLabel="infinity-spin-loading"
                />
              </section>
            </>
          ) : (
        <div className="flex flex-wrap justify-center gap-[30px] mt-16">
          {portfolio.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="flex w-72 h-28 justify-center items-center bg-white px-[72.53px] py-[36.175px] cursor-pointer border-[0.678px] hover:border-[1px] border-[#1113181f] hover:border-[#F0AD99] group grayscale hover:shadow-lg hover:rounded"
                variants={{ ...fadeInAnimationCompanies }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                onClick={() => openModal(index)}>
                <img
                  src={item.acf.image_url}
                  alt={item.acf.company_name}
                  loading="lazy"
                  className=""
                />
              </motion.div>
            );
          })}
        </div>
          )}
        {selectedCompany && (
          <motion.div className="fixed top-0 md:top-6 lg:top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center z-20">
            <div className=" p-6 md:p-16  rounded-md w-11/12 h-5/6 ">
              <div className="text-end">
                <button onClick={closeModal} className="text-4xl mb-10">
                  <RxCross2 />
                </button>
              </div>
              <motion.div
                className="flex flex-col lg:flex-row items-center md:items-start w-full h-full overflow-y-auto hide-scrollbar"
                initial="hidden"
                whileInView="visible"
                variants={{ ...textVariants }}>
                <div className=" w-full h-full lg:w-2/5 flex justify-center items-center max-w-sm  bg-white border border-gray-200 rounded-lg  lg:mx-12 p-8 ">
                  <img src={selectedCompany.acf.image_url} alt="" className="w-96" />
                </div>
                <div className=" w-full lg:w-3/5 mt-4 md:mt-0 ml-6">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold font-arimo border-b-2 border-[#CED0D4] pb-6 mb-6">
                    {selectedCompany.acf.company_name}
                  </h2>
                  <p className=" text-base lg:text-xl font-normal font-arimo border-b-2 border-[#CED0D4] pb-8 mb-4">
                    {selectedCompany.acf.description}
                  </p>
                  <div className="flex flex-col font-arimo gap-5 mt-8">
                    <div className=" flex gap-7 font-arimo">
                      <p className="text-base lg:text-xl font-arimo font-medium flex">
                        Team
                      </p>
                      {/* <ul className="flex flex-wrap gap-x-10">
                        {selectedCompany.team.map((item, index) => {
                          return (
                            <Link
                              to={item.linkedln}
                              target="framename"
                              rel="noopener noreferrer">
                              <li
                                className="text-base lg:text-lg flex justify-center items-center font-arimo font-medium text-[#60646C] hover:text-[#DE5126]"
                                key={index}>
                                {item.name} <MdArrowOutward className="ml-1" />
                              </li>
                            </Link>
                          );
                        })}
                      </ul> */}
                      <p className="companies-list" dangerouslySetInnerHTML={{__html: selectedCompany.acf.team}}></p>
                    </div>
                    <div className="flex gap-5">
                      <p className="text-base lg:text-xl font-arimo font-medium flex items-center">
                        Profile
                      </p>
                      <Link
                        to={selectedCompany.acf.website_link}
                        target="framename"
                        rel="noopener noreferrer">
                        <p className="flex items-baseline text-[#60646C] font-arimo text-base lg:text-lg font-medium hover:text-[#DE5126]">
                          Company Profile <MdArrowOutward className="ml-1" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </>
  );
}
