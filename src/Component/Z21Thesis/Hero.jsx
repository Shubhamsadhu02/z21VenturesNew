import Z21ThesisHero from "./images/Z21ThesisHero.svg";

export default function Hero() {
  return (
    <div
      className="relative h-[350px] md:h-screen w-screen bg-black bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Z21ThesisHero})`, marginTop: "-60px" }}>
      <div className="absolute inset-0 "></div>
      <div className="container">
        <div className="absolute right-2 bottom-12">
          <p className="text-4xl md:text-8xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal">
            z21 <span className=" font-kalnia">thesis</span>
          </p>
        </div>
      </div>
    </div>
  );
}
