import React from 'react';
import dots from '../assets/images/feature-section1-dottedrows.png';
import testimonial from '../assets/images/testimonial.jpg';
import quote from '../assets/images/quotes.svg';
import logo from '../assets/images/fake-company-logo.png';

const Testimonials = () => {
  return (
    <div className="w-full relative">
      <div className="w-11/12 max-w-325 mx-auto relative py-20 ">
        {/* dots image */}
        <img className="absolute w-50 top-32 left-8 -z-10" src={dots} alt="" />
        <h2 className="text-center font-bold text-2xl text-DeepBlueHead">
          An Experience
          <br />
          People Love to Talk About
        </h2>
        <div className="w-6 h-1 bg-GreenLight mx-auto mt-4 mb-6"></div>

        {/* left btn */}
        <button className="cursor-pointer absolute left-0 top-1/2 flex justify-center items-center bg-[#f4f8ff] rounded-full w-15 h-15 md:w-25 md:h-25 active:scale-95 transition-scale duration-200">
          <div className="bg-[#f4f8ff] mix-blend-multiply rounded-full w-10 h-10 md:w-16 md:h-16 flex justify-center items-center">
            <i className="fa-solid fa-angle-left text-2xl md:text-5xl text-gray-400"></i>
          </div>
        </button>

        {/* right btn */}
        <button className="cursor-pointer absolute right-0 top-1/2 flex justify-center items-center bg-[#f4f8ff] rounded-full w-15 h-15 md:w-25 md:h-25 active:scale-95 transition-scale duration-200">
          <div className="bg-[#f4f8ff] mix-blend-multiply rounded-full w-10 h-10 md:w-16 md:h-16 flex justify-center items-center">
            <i className="fa-solid fa-angle-right text-2xl md:text-5xl text-gray-400"></i>
          </div>
        </button>

        {/* Main content */}
        <div className="flex flex-col md:flex-row max-w-240 items-center mx-auto my-20 space-x-40">
          {/* left image */}
          <img
            src={testimonial}
            className="rounded-xl h-60 w-60 md:h-80 md:w-80 mx-auto"
            loading="lazy"
            alt=""
          />
          {/* right part */}
          <div className="max-w-100 flex flex-col-reverse md:flex-col">
            <div className="space-y-2 py-2">
              <img
                loading="lazy"
                className="w-9 h-10 -mb-2"
                src={quote}
                alt=""
              />
              <p className="text-3xl font-extralight">
                Readymade Closed Wallet
                <br />
                Solution For Quick Refunds
              </p>
              <a className="text-GrayText italic underline" href="">
                Learn More
              </a>
            </div>
            <div className="text-center md:text-start space-y-2 py-2">
              <h3 className="text-2xl font-bold">Lorem Ipsum</h3>
              <p className="font-Mulish font-medium">
                CEO, XYZ Engineering Company
              </p>
              <img className="w-20 mx-auto md:mx-0" src={logo} alt="" />
            </div>
          </div>
        </div>

        {/* 6 dts div */}
        <div className="flex flex-row mx-auto space-x-2 w-fit">
          <div className="h-2.5 w-2.5 bg-gray-300 rounded-full "></div>
          <div className="h-2.5 w-2.5 bg-LightBlue-300 rounded-full "></div>
          <div className="h-2.5 w-2.5 bg-gray-300 rounded-full "></div>
          <div className="h-2.5 w-2.5 bg-gray-300 rounded-full "></div>
          <div className="h-2.5 w-2.5 bg-gray-300 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
