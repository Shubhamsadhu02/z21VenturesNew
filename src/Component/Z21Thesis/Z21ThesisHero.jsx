import React from "react";
import Hero from "./Hero.jsx";
import InvestmentPhilosophy from "./InvestmentPhilosophy.jsx";
import WhoDoWePartnerWith from "./WhoDoWePartnerWith.jsx";
import OurDifferentiation from "./OurDifferentiation.jsx";
import JoinZ21 from "./JoinZ21.jsx";
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>z21 Thesis - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/thesis" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
      <InvestmentPhilosophy />
      <WhoDoWePartnerWith />
      <OurDifferentiation />
      <JoinZ21 />
    </div>
  );
};

export default Home;
