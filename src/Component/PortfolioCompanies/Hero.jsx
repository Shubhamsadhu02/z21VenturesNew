import PortfolioCompaniesHero from "./images/PortfolioCompaniesHero.svg";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Arimo, sans-serif",
  };

  return (
    <div
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center -mt-20"
      style={{ backgroundImage: `url(${PortfolioCompaniesHero})` }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-full">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white w-1/2"
            style={fontStyles}>
            Portfolio <span style={{ fontFamily: "Kalnia" }}>Companies</span>
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 pb-8 pr-8 md:pb-16 md:pr-16 lg:pb-24 lg:pr-24">
          <p
            className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal"
            style={fontStyles}>
            We partner with technology focused companies at Pre-seed and Seed
            stage.
          </p>
        </div>
      </div>
    </div>
  );
}
