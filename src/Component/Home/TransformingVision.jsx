import React, { useState } from "react";

export default function TransformingVision() {
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
    <div className="relative h-screen w-screen bg-black">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalnia&family=Arimo&display=swap"
        rel="stylesheet"
      />
      <div className="absolute top-0 pt-32 px-8 md:px-16 lg:px-20 w-full">
        <h2
          className="text-lg font-semibold uppercase tracking-wider text-left text-orange-500 mb-4"
          style={{ fontFamily: "Kalnia" }}>
          Testimonials
        </h2>
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white"
          style={fontStyles}>
          Transforming Visions into Strategic Growth
        </h1>
      </div>
      <div className="absolute w-full px-8 md:px-16 lg:px-20 bottom-10">
        <div className="text-center text-white">{sliderItems[activeSlide]}</div>
        <div className="flex justify-center mt-4">
          <button onClick={prevSlide} className="mx-2 text-white">
            Previous
          </button>
          <button onClick={nextSlide} className="mx-2 text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
