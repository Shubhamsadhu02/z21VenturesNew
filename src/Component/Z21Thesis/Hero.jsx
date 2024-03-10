import { motion } from "framer-motion";
import Z21ThesisHero from "./images/Z21ThesisHero.svg";
import { textVariants } from "../../FramerAnimation/Framer";

export default function Hero() {
  return (
    <div
      className="relative h-[350px] md:h-screen w-screen bg-black bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${Z21ThesisHero})`,
        marginTop: "40px",
      }}>
      <div className="absolute inset-0 "></div>
      <div className="container">
        <div className="absolute right-8 md:right-20 lg:px-20 bottom-12">
          <motion.p className="text-4xl md:text-8xl max-w-xs md:max-w-sm lg:max-w-md text-white font-normal"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            <span className="font-arimo">
              z21
              <br />
              thesis
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
