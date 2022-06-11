import React from "react";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="h-screen bg-white pt-20 lg:pt-0">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse w-full">
          <div className="flex flex-col h-auto w-full lg:w-2/4 justify-center items-center">
            <img src={heroImg} alt="hero" className="block w-full" />
          </div>
          <div className="flex flex-col my-8 px-5 lg:mx-5 justify-start lg:justify-center text-gray-600 h-max lg:h-screen w-full lg:w-2/4 space-y-5">
            <h1 className="text-3xl font-semibold font-open md:hover:scale-105 hover:text-black transition-all duration-300 cursor-text">
              “Siapa saja membaca satu huruf dari Kitab Allah (Alquran), maka
              baginya satu kebaikan, dan satu kebaikan itu dibalas dengan
              sepuluh kali lipatnya.”
            </h1>
            <div className="w-full h-auto">
              <p className="hero text-md font-poppins hover:text-black transition-all duration-300 cursor-pointer">
                Baca Al-Quran sekarang
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
