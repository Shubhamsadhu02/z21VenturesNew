import Companies from "./Companies";
import Hero from "./Hero";
const PortfolioCompanies = () => {
  return (
    <div>
      <Hero />
      <section className="w-screen py-12 md:py-24 px-10 md:px-20 bg-[#EFEFF1]" id="companies">
        <div className="container">
          <Companies />
        </div>
      </section>
    </div>
  );
};

export default PortfolioCompanies;
