import Z21ThesisHero from "./images/Z21ThesisHero.svg";

export default function Hero() {
  return (
    <div
      className="relative h-[350px] md:h-screen w-screen bg-black bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${Z21ThesisHero})`,
        marginTop: "-60px",
      }}>
      <div className="absolute inset-0 "></div>
      <div className="container">
        <div className="absolute md:right-20 lg:px-20 bottom-12">
          <p className="text-4xl md:text-8xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal">
            <span className="font-arimo">
              z21
              <br />
              thesis
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
