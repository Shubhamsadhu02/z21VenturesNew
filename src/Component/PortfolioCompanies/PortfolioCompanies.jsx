import { Helmet } from "react-helmet";
import Companies from "./Companies";
import Hero from "./Hero";
const PortfolioCompanies = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - z21 ventures</title>
        <link rel="canonical" href="https://z21.ventures/portfolio" />
        <meta name="description" content="z21 Ventures application" />
      </Helmet>
      <Hero />
      <section className="w-screen py-12 md:py-24 px-5 md:px-20 bg-[#EFEFF1]" id="companies">
        <div className="container">
          <Companies />
        </div>
      </section>
    </div>
  );
};

export default PortfolioCompanies;
