import React from 'react'

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
import { Link } from 'react-router-dom';

export default function Companies() {
    let companieslogo = [
        {
            image: Hen,
            link: "https://hennozzles.com/"
        },
        {
            image: truefoundry,
            link: "https://www.truefoundry.com/"
        },
        {
            image: into,
            link: "https://www.inito.com/"
        },
        {
            image: Explorex,
            link: "https://www.explorex.co/"
        },
        {
            image: kidex,
            link: "https://kid-ex.com/"
        },
        {
            image: optiwise,
            link: "https://www.optiwise.ai/"
        },
        {
            image: livsyt,
            link: "https://livsyt.com/"
        },
        {
            image: moneyclub,
            link: "https://moneyclubber.com/"
        },
        {
            image: perceptynerobots,
            link: "https://www.perceptyne.com/"
        }
        ,
        {
            image: stealth,
            link: "https://www.linkedin.com/company/stealth-startup-51/people/"
        },
        {
            image: Earkart,
            link: "https://best-hearing-aid.earkart.in/"
        },
        {
            image: inspecthoa,
            link: "https://inspecthoa.com/"
        },
        {
            image: CoverSelf,
            link: "https://www.coverself.com/"
        },
        {
            image: Develo,
            link: "https://getdevelo.com/"
        },
        {
            image: Furnishka,
            link: "https://furnishka.com/"
        },
        {
            image: gloroots,
            link: "https://www.gloroots.com/"
        },
        {
            image: meomind,
            link: "https://meomind.com/"
        },
        {
            image: vhub,
            link: "https://vhub.ai/"
        },
        {
            image: Energy,
            link: "https://www.energycompany.in/"
        },
        {
            image: shopadvisor,
            link: "https://www.shopadvisor.ai/"
        }
    ]

    return (
        <div className="flex flex-wrap justify-center gap-[20px] mt-16">
            {
                companieslogo.map((item, index) => {
                    return (
                        <div key={index} className="flex w-72 h-28 justify-center items-center bg-white px-[72.53px] py-[36.175px] border-[0.678px] border-solid border-[rgba(17,19,24,0.12)] mix-blend-luminosity hover:mix-blend-normal">
                            <Link to={item.link} target="framename"><img src={item.image} alt={item.link} /></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
