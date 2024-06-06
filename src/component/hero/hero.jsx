import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/asset/pict/jis.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 text-center">
          Best For The World
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 text-center">
          We learn in Indonesia to be Best <i>for</i> the World. <br /> Find out
          how you can join the JIS community today!{" "}
        </p>
        <button class="btn-explore">
          <b>Explore Now</b>
        </button>
      </div>
    </div>
  );
};

export default Hero;
