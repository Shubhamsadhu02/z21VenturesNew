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
import confier from "../PortfolioCompanies/images/Confier.png";
import rexera from "../PortfolioCompanies/images/rexera.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  fadeInAnimationCompanies,
} from "../../FramerAnimation/Framer";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

export default function Companies() {
  let companieslogo = [
    {
      image: Hen,
      companyName: "Hen Nozzles",
      link: "https://hennozzles.com/",
      description: `HEN manufactures adjustable smoothbore high efficiency nozzles that suppresses fire upto 3X faster than conventional nozzles with 50% less water.`,
      team: [
        {
          name: "Sunny Sethi",
          linkedln: "https://www.linkedin.com/in/sunny-sethi-polymers/",
        },
      ],
    },
    {
      image: truefoundry,
      companyName: "Truefoundry",
      link: "https://www.truefoundry.com/",
      description: `TrueFoundry is a GenAI deployment PaaS that enables Teams to deploy and monitor models in 15 minutes with 100% reliability, scalability and low cost - enabling real business value realisation`,
      team: [
        {
          name: "Nikunj Bajaj",
          linkedln: "https://www.linkedin.com/in/nikunj-bajaj-10476824/",
        },
        {
          name: "Anuraag Gutgutia",
          linkedln: "https://www.linkedin.com/in/anuraaggutgutia/",
        },
        {
          name: "Abhishek Choudhary",
          linkedln: "https://www.linkedin.com/in/abhishekch123/",
        },
      ],
    },
    {
      image: into,
      companyName: "Inito",
      link: "https://www.inito.com/",
      description: `Inito is an at-home fertility hormone testing platform`,
      team: [
        {
          name: "Aayush Rai",
          linkedln: "https://www.linkedin.com/in/aayushinito/",
        },
      ],
    },
    {
      image: Explorex,
      companyName: "Explorex",
      link: "https://www.explorex.co/",
      description: `Explorex's full stack solution enables POS, inventory and order management in restaurants`,
      team: [
        {
          name: "Mainak Sarkar",
          linkedln: "https://www.linkedin.com/in/mainak-explorex/",
        },
        {
          name: "Pritam Khan",
          linkedln: "https://www.linkedin.com/in/iampkhan/",
        },
      ],
    },
    {
      image: kidex,
      companyName: "Kidex",
      link: "https://kid-ex.com/",
      description: `KidEx is the Beyond Academics Technology Partner for K12 Schools in India to achieve Holistic Progress of every child for informed career selection & readiness (as per Govt. policy- NEP 2020)`,
      team: [
        {
          name: "Kapish Saraf",
          linkedln: "https://www.linkedin.com/in/kapish-saraf-75b4a710/",
        },
        {
          name: "Amritanshu Kumar",
          linkedln: "https://www.linkedin.com/in/amritanshu-kumar-50173419/",
        },
      ],
    },
    {
      image: optiwise,
      companyName: "Optiwise",
      link: "https://www.optiwise.ai/",
      description: `Optiwise is a AI driven ecommerce channel optimization platform for sellers and brands. It automates the optimization of listing content, price and Ad campaigns to increase traffic and conversions.`,
      team: [
        {
          name: "Deepak Goyal",
          linkedln: "https://www.linkedin.com/in/deepakkumargoyal/",
        },
        {
          name: "Rahul Shah",
          linkedln: "https://www.linkedin.com/in/rahullshah/",
        },
      ],
    },
    {
      image: livsyt,
      companyName: "LivSyt",
      link: "https://livsyt.com/",
      description: `LivSYT is a construction management software that helps construction stakeholders manage projects at a granular (site-activity) level. It provides real-time management and performs resource allocation`,
      team: [
        {
          name: "Karthik Thumu",
          linkedln: "https://www.linkedin.com/in/karthik-thumu-3605447/",
        },
        {
          name: "Brajesh Bhanj Deo",
          linkedln: "https://www.linkedin.com/in/brajesh-bhanj-deo-8a704b1a/",
        },
      ],
    },
    {
      image: moneyclub,
      companyName: "MoneyClub",
      link: "https://moneyclubber.com/",
      description: `Moneyclub is bringing financial access to the Indian masses. They created a chit fund like business model, a digital ROSCA (Rotating Savings & Credit Associations) enabling to save, borrow and invest.`,
      team: [
        {
          name: "Manuraj Jain",
          linkedln: "https://www.linkedin.com/in/manurajjain/",
        },
      ],
    },
    {
      image: perceptynerobots,
      companyName: "Perceptyne Robots",
      link: "https://www.perceptyne.com/",
      description: `Perceptyne aims to create next-gen robots to handle dexterous tasks such as product packaging and assembly`,
      team: [
        {
          name: "Raviteja Chivukula",
          linkedln: "https://www.linkedin.com/in/raviteja-chivukula-b2637414/",
        },
        {
          name: "Jagga Raju N.",
          linkedln: "https://www.linkedin.com/in/jaggaraju/",
        },
        {
          name: "Mrutyunjaya Sastry",
          linkedln: "https://www.linkedin.com/in/mrutyunjayasastry/",
        },
      ],
    },
    // {
    //     image: stealth,
    //     link: "https://www.linkedin.com/company/stealth-startup-51/people/"
    // },
    {
      image: confier,
      companyName: "Conifer Systems",
      link: "https://conifer.io/",
      description: `EV Drivetrain that is 50% lighter, 50% cheaper and free of supply chain critical rare-earth materials. Their modular design is for easier manufacturability and configurability`,
      team: [
        {
          name: "Ankit Somani",
          linkedln: "https://www.linkedin.com/in/ankitsomani/",
        },
        {
          name: "Yateendra Deshpande",
          linkedln: "https://www.linkedin.com/in/yateendra-d-03a04415/",
        },
      ],
    },
    {
      image: Earkart,
      companyName: "Earkart",
      link: "https://best-hearing-aid.earkart.in/",
      description: `earKART is changing the lives of people with hearing loss through innovative and affordable hearing aids.`,
      team: [
        {
          name: "Rohit Misra",
          linkedln: "https://www.linkedin.com/in/rohit-misra-71a5b52/",
        },
        {
          name: "Priyadarshi Jha",
          linkedln: "https://www.linkedin.com/in/priyadarshi-jha-a3a99741/",
        },
      ],
    },
    // {
    //     image: inspecthoa,
    //     link: "https://inspecthoa.com/"
    // },
    {
      image: rexera,
      companyName: "Rexera",
      link: "https://www.linkedin.com/company/rexera/",
      description: `Rexera seamlessly executes real estate workflows which are complex, heterogeneous and dominated by non-tech enabled counterparties`,
      team: [
        {
          name: "Vishrut Malhotra",
          linkedln: "https://www.linkedin.com/in/vishrut-malhotra-6b13a311/",
        },
        {
          name: "Anton Tonev",
          linkedln: "https://www.linkedin.com/in/atonev/",
        },
        {
          name: "Atin Hindocha",
          linkedln: "https://www.linkedin.com/in/atinhindocha/",
        },
      ],
    },
    {
      image: CoverSelf,
      companyName: "Coverself",
      link: "https://www.coverself.com/",
      description: `CoverSelf’s healthcare payment integrity platform empowers healthcare organizations reduce claims & payment inaccuracies, administrative costs and increase provider experience.`,
      team: [
        {
          name: "Rajasekhar Maddireddy",
          linkedln: "https://www.linkedin.com/in/rajasekhar-maddireddy/",
        },
        {
          name: "Raghavendra Pawar",
          linkedln: "https://www.linkedin.com/in/raghavpawar/",
        },
      ],
    },
    {
      image: Develo,
      companyName: "Develo",
      link: "https://getdevelo.com/",
      description: `Develo is the first end-to-end software solution tailored exclusively for independent pediatric practices.`,
      team: [
        {
          name: "Aaron Sin",
          linkedln: "https://www.linkedin.com/in/aaronsin/",
        },
        {
          name: "Han Ke",
          linkedln: "https://www.linkedin.com/in/han-ke-9059b286/",
        },
      ],
    },
    {
      image: Furnishka,
      companyName: "Furnishka",
      link: "https://furnishka.com/",
      description: `Furnishka aims to provide high quality furniture by optimizing the supply chain in this unorganized space`,
      team: [
        {
          name: "Ganesh Pawar",
          linkedln: "https://www.linkedin.com/in/ganesh-pawar-77b4891b/",
        },
      ],
    },
    {
      image: gloroots,
      companyName: "Gloroots",
      link: "https://www.gloroots.com/",
      description: `Companies have started looking for talent globally for cost efficiency. Gloroots provides a full stack platform to discover, hire, onboard and manage remote team`,
      team: [
        {
          name: "Mayank Kumar Bhutoria",
          linkedln: "https://www.linkedin.com/in/mayankkumarbhutoria/",
        },
        {
          name: "Yamini Jain",
          linkedln: "https://www.linkedin.com/in/yamini-jain-405a4661/",
        },
        {
          name: "Abhirup Nath",
          linkedln: "https://www.linkedin.com/in/abhirupnath/",
        },
      ],
    },
    {
      image: meomind,
      companyName: "Meomind",
      link: "https://meomind.com/",
      description: `Meomind is the world’s first asynchronous platform to make therapy more affordable and accessible to everyone, addressing the existing gaps in critical mental health resources for employers and insurers`,
      team: [
        {
          name: "Sushant Gupta",
          linkedln: "https://www.linkedin.com/in/sushantgupta1/",
        },
      ],
    },
    {
      image: vhub,
      companyName: "vHub",
      link: "https://vhub.ai/",
      description: `Digital marketers do not spend more than 5% of their marketing budgets on influencer marketing because it is not tech-enabled. vHub.ai, an AI driven SaaS platform optimizes running influencer campaigns for brands, it provides deep analytics into influencers’ profiles and brings transparency in the entire process.`,
      team: [
        {
          name: "Sachin Modi",
          linkedln: "https://www.linkedin.com/in/sachin-modi-3b0bab65/",
        },
        {
          name: "Rajesh Jagasia",
          linkedln: "https://www.linkedin.com/in/rajeshjagasia/",
        },
      ],
    },
    {
      image: Energy,
      companyName: "The Energy Company",
      link: "https://www.energycompany.in/",
      description: `The Energy Company solves short-term challenges like range anxiety & safety and long-term challenges w.r.tresale value & financing of Electric Vehicles`,
      team: [
        {
          name: "Rahul Lamba",
          linkedln: "https://www.linkedin.com/in/rhllamba/",
        },
        {
          name: "Pratik Somani",
          linkedln: "https://www.linkedin.com/in/pratiksomani/",
        },
        {
          name: "Prashant Rathee",
          linkedln: "https://www.linkedin.com/in/prashant-rathee/",
        },
      ],
    },
    {
      image: shopadvisor,
      companyName: "Shopadvisor",
      link: "https://www.shopadvisor.io/",
      description: `Shopadvisor is an AI salesperson for ecommerce stores, reimagining how customers interact with chatbots via their Knowledge Graph, recommendation engine and fine-tuned LLMs`,
      team: [
        {
          name: "Nalin Gupta",
          linkedln: "https://www.linkedin.com/in/nalingupta01/",
        },
      ],
    },
    {
      image: zime,
      companyName: "Zime",
      link: "https://zime.ai/",
      description: `Zime is a virtual sales coach that understands the use cases, products, competitors, customer personas to coach sales reps do better based on their strengths, gaps and business context `,
      team: [
        {
          name: "Sanchit Garg",
          linkedln: "https://www.linkedin.com/in/sanchitg/",
        },
        {
          name: "Vishnu Khandelwal",
          linkedln: "https://www.linkedin.com/in/vishnu-khandelwal-4895a812/",
        },
      ],
    },
    {
      image: basepair,
      companyName: "BasePair",
      link: "https://www.basepairtech.com/",
      description: `Basepair is a market leading point and click bioinformatics company focused on unlocking the full potential of Next Generation Sequencing (NGS) technology.`,
      team: [
        {
          name: "Amit Sinha",
          linkedln: "https://www.linkedin.com/in/ausinha/",
        },
      ],
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
      <div className="flex flex-wrap justify-center gap-[30px] mt-16">
        {companieslogo.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="flex w-72 h-28 justify-center items-center bg-white px-[72.53px] py-[36.175px] cursor-pointer border-[0.678px] hover:border-[1px] border-[#1113181f] group hover:shadow-lg hover:rounded"
              variants={{ ...fadeInAnimationCompanies }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              onClick={() => openModal(index)}>
              <img
                src={item.image}
                alt={item.link}
                loading="lazy"
                className=""
              />
            </motion.div>
          );
        })}
      </div>
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
                <img src={selectedCompany.image} alt="" className="w-96" />
              </div>
              <div className=" w-full lg:w-3/5 mt-4 md:mt-0 ml-6">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold font-arimo border-b-2 border-[#CED0D4] pb-6 mb-6">
                  {selectedCompany.companyName}
                </h2>
                <p className=" text-base lg:text-xl font-normal font-arimo border-b-2 border-[#CED0D4] pb-8 mb-4">
                  {selectedCompany.description}
                </p>
                <div className="flex flex-col font-arimo gap-5 mt-8">
                  <div className=" flex gap-7 font-arimo">
                    <p className="text-base lg:text-xl font-arimo font-medium flex">
                      Team
                    </p>
                    <ul className="flex flex-wrap gap-x-10">
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
                    </ul>
                  </div>
                  <div className="flex gap-5">
                    <p className="text-base lg:text-xl font-arimo font-medium flex items-center">
                      Profile
                    </p>
                    <Link
                      to={selectedCompany.link}
                      target="framename"
                      rel="noopener noreferrer">
                      <p className="flex justify-center items-center text-[#60646C] font-arimo text-base lg:text-lg font-medium hover:text-[#DE5126]">
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
