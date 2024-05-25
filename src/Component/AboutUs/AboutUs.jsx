import Hero from "./Hero.jsx";
import MissionVision from "./MissionVision.jsx";
import CoreValues from "./CoreValues.jsx";
import OurTeam from "./OurTeam.jsx";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

const AboutUs = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "AboutUs",
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/aboutus" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
      <MissionVision />
      <CoreValues />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
