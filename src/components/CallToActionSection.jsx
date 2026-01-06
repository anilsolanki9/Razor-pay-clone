import React from 'react';
import ctaImg from '../assets/images/ctaImg.svg';
import tick from '../assets/images/check.svg';

const CallToActionSection = () => {
  return (
    <div className="w-full h-full bg-no-repeat bg-cover relative z-10 bg-[url(./assets/images/CTABg.svg)] ctaSection min-h-150 md:min-h-125 xl:min-h-140 xl:pt-15">
      <div className="w-11/12 max-w-270 mx-auto relative flex flex-row items-center justify-between pt-25">
        {/* left part */}
        <div className="">
          <h2 className="text-2xl text-white font-bold">
            Supercharge your business with Razorpay
          </h2>
          <div className="w-6 h-1 bg-GreenLight mt-4 mb-6"></div>
          <p className="font-Mulish text-white">
            Sign up now to experience the future of payments and offer
            <br />
            your customers the best checkout experience.
          </p>
          <ul className="flex flex-row gap-1 space-y-2 text-white flex-wrap my-8">
            <li className="font-Mulish flex space-x-2 items-center mr-12">
              <img className="w-7" src={tick} alt="" loading="lazy" />
              <span className="whitespace-nowrap">Quick Onboarding</span>
            </li>
            <li className="font-Mulish flex space-x-2 items-center mr-12">
              <img className="w-7" src={tick} alt="" loading="lazy" />
              <span className="whitespace-nowrap">
                Access to entire product suite
              </span>
            </li>
            <li className="font-Mulish flex space-x-2 items-center mr-12">
              <img className="w-7" src={tick} alt="" loading="lazy" />
              <span className="whitespace-nowrap">API access</span>
            </li>
            <li className="font-Mulish flex space-x-2 items-center mr-12">
              <img className="w-7" src={tick} alt="" loading="lazy" />
              <span className="whitespace-nowrap">24x7 support</span>
            </li>
          </ul>
          <button className="min-w-8 bg-white text-LightBlue-300 duration-200 transition px-4 py-3 space-x-2 font-semibold rounded border cursor-pointer hover:text-LightBlue-500">
            <span>Sign Up</span>
            <i className="ri-arrow-right-line font-normal"></i>
          </button>
        </div>
        {/* right part */}
        <img
          className="w-60 h-70.5 mt-7 hidden lg:inline-block"
          src={ctaImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToActionSection;
