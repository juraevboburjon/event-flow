import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?semt=ais_hybrid&w=740",
    },
    {
      url: "https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-2515cda/spotme.com/wp-content/uploads/2020/07/Hero-1.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1785808259/photo/networking-opportunities.jpg?s=612x612&w=0&k=20&c=pgrB3Py2KJaOmohj7wRYmIg0frjgSC0nXBBfbDb-HH4=",
    },
    {
      url: "https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=612x612&w=0&k=20&c=hqHJA6c2nhuvNlOmC1cu2ngYZTdiDTwIRwRTpALrlAg=",
    },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  });

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl h-[400px] w-full m-auto pt-8 px-4 relative">
      {slides.length > 0 ? (
        <>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>

          <div
            className="absolute top-[50%] left-10 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <BsFillArrowLeftCircleFill size={30} />
          </div>
          <div
            className="absolute top-[50%] right-10 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsFillArrowRightCircleFill size={30} />
          </div>
        </>
      ) : (
        <p>No slides available.</p>
      )}
    </div>
  );
};

export default BannerSlider;
