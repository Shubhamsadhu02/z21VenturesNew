import React, { useState } from "react";

export default function JoinZ21() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
    borderBottom: "1px solid white", // Adjusted to 1px as per your code snippet
    paddingBottom: "24px", // Spacing out the border from the text
  };

  // Placeholder data for the slider
  const sliderItems = ["Slide 1 Content", "Slide 2 Content", "Slide 3 Content"];

  const [activeSlide, setActiveSlide] = useState(0);

  // Function to change slide
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  return (
    <section className="w-screen bg-black py-24 px-20">
      <div className="container">
        <div className="inset-0 bg-opacity-50"></div>
        <link
          href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
          rel="stylesheet"
        />
        <div className=" w-full">
          <h2
            className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4">
            Contact
          </h2>
          <h1
            className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight text-white"
            style={fontStyles}>
            Looking to join the z21 portfolio?
          </h1>

          <h2
            className="text-3xl  tracking-wider text-left text-orange-500 mt-8 ">
            Reach out to us at info@z21.com
          </h2>
        </div>
      </div>
    </section>
  );
}
