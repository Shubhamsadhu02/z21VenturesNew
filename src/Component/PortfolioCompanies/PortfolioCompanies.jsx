import Companies from "./Companies";
import Hero from "./Hero";
const PortfolioCompanies = () => {
  return (
    <div>
      <Hero />
      <section className="w-screen py-24 px-20">
        <div className="container">
          <Companies />
        </div>
      </section>
    </div>
  );
};

export default PortfolioCompanies;
