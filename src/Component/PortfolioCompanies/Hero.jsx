import { GoArrowDown } from "react-icons/go";
import { HashLink } from 'react-router-hash-link';

import PortfolioCompaniesHero from "./images/PortfolioCompaniesHero.svg";

export default function Hero() {

  return (
    <div
      className="relative h-screen w-screen bg-black bg-no-repeat bg-cover bg-center -mt-20"
      style={{ backgroundImage: `url(${PortfolioCompaniesHero})` }}>
      <div className="container">
        <div className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white w-1/2 font-arimo">
            Portfolio <span className=" font-kalnia font-normal">Companies</span>
          </h1>
        </div>
        <div className="">
          <p className="text-base md:text-lg lg:text-xl w-1/2 md:w-1/3 text-white font-normal font-arimo absolute bottom-48 md:bottom-56 right-0 md:right-28">
            We partner with technology focused companies at Pre-seed and Seed
            stage.
          </p>
        </div>
        <HashLink to={"#companies"} smooth><div className=" bg-[#DE5126] absolute bottom-20 right-4 md:right-28 rounded-full p-3 md:p-6 text-xl md:text-3xl text-white">
          <GoArrowDown />
        </div></HashLink>
      </div>
    </div>
  );
}
