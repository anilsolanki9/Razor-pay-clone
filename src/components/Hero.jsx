import React from 'react';
import heroRightImg from '../assets/images/hero-illustration.jpg';
import heroShape from '../assets/images/hero-shape.svg';

const Hero = () => {
  return (
    <div className="bg-DeepBlue relative">
      {/* content part */}
      <div className="w-10/12 max-w-270 mx-auto -mt-0.5 flex flex-col lg:flex-row items-center justify-between">
        {/* left part */}
        <div className="space-y-8">
          <h1 className="font-bold text-[40px] leading-[1.2] text-white">
            Power your finance, grow your business
          </h1>
          <div className="h-1 w-6 bg-GreenLight"></div>
          <p className="text-white/70 text-[18px] leading-7">
            Accept payments from customers. Automate payouts to vendors &
            employees. Never run out of working capital.
          </p>
          <button className="bg-LightBlue px-4.5 py-3.5 rounded-md text-white font-semibold hover:bg-LightBlue-500 transition-all duration-200 cursor-pointer">
            Sign Up Now
          </button>
        </div>
        {/* right part */}
        <img className="w-full max-w-170" src={heroRightImg} alt="" />
      </div>
      {/* shape part */}
      <div className="absolute w-full overflow-hidden -mt-0.5">
        <img className="w-full scale-x-[100.3%]" src={heroShape} alt="" />
      </div>
    </div>
  );
};

export default Hero;
