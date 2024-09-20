import React from "react";
import Hero from "../Home/Hero.jsx";
import PowerOfCommunity from "../Home/PowerOfCommunity.jsx";
import PortfolioCompanies from "../Home/PortfolioCompanies.jsx";
import TransformingVision from "./TransformingVision.jsx";
import ReadAboutBlogs from "./ReadAboutBlogs.jsx";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import FeaturedInNew from "./FeaturedInNew.jsx";
import Featured from "./Featured.jsx";
const Home = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
      <FeaturedInNew/>
      <Featured/>
      <PowerOfCommunity />
      <PortfolioCompanies />
      <TransformingVision />
      <ReadAboutBlogs />
    </div>
  );
};

export default Home;
