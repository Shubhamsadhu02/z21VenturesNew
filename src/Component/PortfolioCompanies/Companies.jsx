import React, { useState } from "react";

import CoverSelf from "../PortfolioCompanies/images/coverSelf.png";
import Develo from "../PortfolioCompanies/images/develo.png";
import Earkart from "../PortfolioCompanies/images/earkart.png";
import Energy from "../PortfolioCompanies/images/energy.png";
import Explorex from "../PortfolioCompanies/images/explorex.png";
import Furnishka from "../PortfolioCompanies/images/furnishka.png";
import gloroots from "../PortfolioCompanies/images/gloroots.png";
import Hen from "../PortfolioCompanies/images/Hen.png";
import inspecthoa from "../PortfolioCompanies/images/inspecthoa.png";
import into from "../PortfolioCompanies/images/into.png";
import kidex from "../PortfolioCompanies/images/kidex.png";
import livsyt from "../PortfolioCompanies/images/livsyt.png";
import meomind from "../PortfolioCompanies/images/meomind.png";
import moneyclub from "../PortfolioCompanies/images/moneyclub.png";
import optiwise from "../PortfolioCompanies/images/optiwise.png";
import stealth from "../PortfolioCompanies/images/stealth.png";
import perceptynerobots from "../PortfolioCompanies/images/perceptyne robots.png";
import truefoundry from "../PortfolioCompanies/images/truefoundry.png";
import vhub from "../PortfolioCompanies/images/vhub.png";
import shopadvisor from "../PortfolioCompanies/images/shopadvisor.png";
import zime from "../PortfolioCompanies/images/zime.png";
import basepair from "../PortfolioCompanies/images/basepair.png";
import confier from "../PortfolioCompanies/images/conifer.png";
import rexera from "../PortfolioCompanies/images/rexera.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInAnimationCompanies } from "../../FramerAnimation/Framer";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

export default function Companies() {
  let companieslogo = [
    {
      image: Hen,
      companyName: "Hennozzles",
      link: "https://hennozzles.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: truefoundry,
      companyName: "Truefoundry",
      link: "https://www.truefoundry.com/",
      designation: "SAAS/ Vertical Software",
      description: `TrueFoundry is a GenAI deployment PaaS that enables Teams to deploy and monitor models in 15 minutes with 100% reliability, scalability and low cost - enabling real business value realisation`,
      team: [
        {
          name: "Nikunj Bajaj | CEO",
        },
        {
          name: "Anuraag Gutgutia",
        },
        {
          name: "Abhishek Choudhary | CTO",
        }
      ]
    },
    {
      image: into,
      companyName: "Into",
      link: "https://www.inito.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: Explorex,
      companyName: "Explorex",
      link: "https://www.explorex.co/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: kidex,
      companyName: "Kidex",
      link: "https://kid-ex.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: optiwise,
      companyName: "Optiwise",
      link: "https://www.optiwise.ai/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: livsyt,
      companyName: "Livsyt",
      link: "https://livsyt.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: moneyclub,
      companyName: "Moneyclubber",
      link: "https://moneyclubber.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: perceptynerobots,
      companyName: "Perceptynerobots",
      link: "https://www.perceptyne.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    // {
    //     image: stealth,
    //     link: "https://www.linkedin.com/company/stealth-startup-51/people/"
    // },
    {
      image: confier,
      companyName: "Confier Systems",
      link: "https://conifersystems.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: Earkart,
      companyName: "Earkart",
      link: "https://best-hearing-aid.earkart.in/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    // {
    //     image: inspecthoa,
    //     link: "https://inspecthoa.com/"
    // },
    {
      image: rexera,
      companyName: "Rexera",
      link: "https://www.linkedin.com/company/rexera/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: CoverSelf,
      companyName: "Coverself",
      link: "https://www.coverself.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: Develo,
      companyName: "Develo",
      link: "https://getdevelo.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: Furnishka,
      companyName: "Furnishka",
      link: "https://furnishka.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: gloroots,
      companyName: "Gloroots",
      link: "https://www.gloroots.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: meomind,
      companyName: "Meomind",
      link: "https://meomind.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: vhub,
      companyName: "vHub",
      link: "https://vhub.ai/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: Energy,
      companyName: "Energy Company",
      link: "https://www.energycompany.in/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: shopadvisor,
      companyName: "Shopadvisor",
      link: "https://www.shopadvisor.ai/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: zime,
      companyName: "Zime",
      link: "https://zime.ai/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
    {
      image: basepair,
      companyName: "Basepair Tech",
      link: "https://www.basepairtech.com/",
      designation: "",
      description: ``,
      team: [
        {
          name: "",
        }
      ]
    },
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);
  const openModal = (index) => {
    setSelectedCompany(companieslogo[index]);
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };


  return (
    <>
      <div className="flex flex-wrap justify-center gap-[20px] mt-16">
        {companieslogo.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="flex w-72 h-28 justify-center items-center bg-white px-[72.53px] py-[36.175px] border-[0.678px] hover:px-16 hover:py-8 hover:border-[1px] border-[#1113181f] group grayscale hover:grayscale-0 hover:shadow-lg hover:rounded"
              variants={{ ...fadeInAnimationCompanies }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              onClick={() => openModal(index)}>
              <img
                src={item.image}
                alt={item.link}
                className="group-hover:hover:transition group-hover:hover:duration-300 group-hover:hover:ease-in-out group-hover:hover:scale-110"
              />
            </motion.div>
          );
        })}
      </div>
      {selectedCompany && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#EFEFF1] p-16 rounded-md w-11/12 h-full overflow-y-auto">
            <div className="text-end">
              <button onClick={closeModal} className="text-4xl mb-10"><RxCross2 /></button>
            </div>
            <div className="flex w-full">
              <div className=" w-2/5 bg-white flex justify-center items-center mx-12 p-8">
                <img src={selectedCompany.image} alt="" className="w-96" />
              </div>
              <div className=" w-3/5 ml-6">
                <h2 className="text-8xl font-bold font-arimo border-b-2 border-[#CED0D4] pb-4 mb-4">{selectedCompany.companyName}</h2>
                <p className="text-xl font-normal font-arimo">{selectedCompany.designation}</p>
                <p className=" pt-12 text-xl font-normal font-arimo border-b-2 border-[#CED0D4] pb-8 mb-4">{selectedCompany.description}</p>
                <p className="text-base md:text-xl font-semibold flex items-center text-[#60646C] my-8">
                  Team
                  <p className="flex justify-center items-center text-lg font-semibold ml-8">Company Profile  <MdArrowOutward /></p>
                </p>
                <Link
                  to={selectedCompany.link}
                  target="framename"
                  rel="noopener noreferrer"
                  className="text-base md:text-xl font-semibold flex items-center text-[#60646C]">
                  Profile
                  <p className="flex justify-center items-center text-lg font-semibold ml-8">Company Profile  <MdArrowOutward /></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
