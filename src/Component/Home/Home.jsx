import React from "react";
import Hero from "../Home/Hero.jsx";
import PowerOfCommunity from "../Home/PowerOfCommunity.jsx";
import PortfolioCompanies from "../Home/PortfolioCompanies.jsx";
import TransformingVision from "./TransformingVision.jsx";
import ReadAboutBlogs from "./ReadAboutBlogs.jsx";
import { Helmet } from "react-helmet";
<<<<<<< HEAD
import Featured from "./Featured.jsx";
=======
import ReactGA from "react-ga4";
>>>>>>> d824e53bff777f6508df8cb8554f9e0a1f7ebc95
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
      <Featured/>
      <PowerOfCommunity />
      <PortfolioCompanies />
      <TransformingVision />
      <ReadAboutBlogs />
    </div>
  );
};

export default Home;
