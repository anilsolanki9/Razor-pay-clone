import React from 'react';
import dots from '../assets/images/feature-section1-dottedrows.png';
import featurePaymentSuit from '../assets/images/payment-suite.png';
import tick from '../assets/images/check.svg';
import gatway from '../assets/images/payment-gateway.svg';

const FeatureSection = () => {
  return (
    <div className="relative mt-47.5 overflow-hidden">
      {/* floating dots images */}
      <img
        className="w-58.25 h-41.75 absolute -top-32 left-40"
        loading="lazy"
        src={dots}
        alt=""
      />
      <img
        className="w-58.25 h-41.75 absolute top-12 right-0 inline-block rotate-180"
        loading="lazy"
        src={dots}
        alt=""
      />
      <div className="w-11/12 max-w-270 mx-auto relative pt-4">
        {/* content  */}
        <h2 className="text-center font-bold text-2xl hidden md:block leading-[1.2]">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <h2 className="text-center font-bold text-4xl mx-auto max-w-10/12 block md:hidden leading-[1.2]">
          Explore Razorpay Payment Suite
        </h2>
        <div className="h-1 w-6 bg-GreenLight mx-auto mt-4 mb-6"></div>

        {/* inner content section */}
        <div className="w-full min-h-130 md:border rounded md:border-LightGray md:bg-white relative p-10 py-12 flex mt-20">
          {/* icon img */}
          <div className="absolute z-0 top-12 right-10 sm:right-15 md:hidden  bg-LightBlue-500 rounded-full">
            <img src={gatway} className="w-12 h-12 " alt="" />
          </div>
          {/* box shape */}
          <svg
            className="stroke-1 stroke-[#818597] h-full w-full top-0 left-0 absolute z-9 FeatureCardSVG transition-all duration-200 inline-block md:hidden"
            viewBox="0 0 349.32501220703125 225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ strokeOpacity: 0.15 }}
          >
            <path
              d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
              fill="#fff"
            ></path>
          </svg>

          {/* left section */}
          <div className="flex flex-col w-full justify-between relative z-20">
            <h3 className="text-xl md:text-3xl leading-7 md:leading-10 font-semibold max-w-[70%] md:max-w-125">
              Supercharge your business with the all-powerful
              <span className="text-LightBlue"> Payment Gateway</span>
            </h3>
            <ul className="space-y-2">
              <li className="font-Mulish flex items-center space-x-2">
                {/* icon can be taken from feather icon library */}
                <img className="" src={tick} alt="" loading="lazy" />
                <span>100+ Payment Methods</span>
              </li>
              <li className="font-Mulish flex items-center space-x-2">
                <img className="" src={tick} alt="" loading="lazy" />
                <span>Industry Leading Success Rate</span>
              </li>
              <li className="font-Mulish flex items-center space-x-2">
                <img className="" src={tick} alt="" loading="lazy" />
                <span>Superior Checkout Experience</span>
              </li>
              <li className="font-Mulish flex items-center space-x-2">
                <img className="" src={tick} alt="" loading="lazy" />
                <span>Easy to Integrate</span>
              </li>
              <li className="font-Mulish flex items-center space-x-2">
                <img className="" src={tick} alt="" loading="lazy" />
                <span>Instant Settlements from day 1</span>
              </li>
              <li className="font-Mulish flex items-center space-x-2">
                <img className="" src={tick} alt="" loading="lazy" />
                <span>In-depth Reporting and Insights</span>
              </li>
            </ul>
            {/* button and hyperink */}
            <div className="flex flex-col-reverse md:items-center md:flex-row gap-4">
              <button className="bg-LightBlue px-4.5 py-3.5 rounded-md text-white font-semibold hover:bg-LightBlue-500 transition-all duration-200 cursor-pointer">
                Sign Up Now <i className="ri-arrow-right-line font-normal"></i>
              </button>
              <div className="text-LightBlue font-semibold hover:text-GrayBlue transition-all duration-200 font-Mulish cursor-pointer">
                <a href="#">Know More</a>
                <i className="fa-solid fa-chevron-right text-sm relative"></i>
              </div>
            </div>
          </div>
          <img
            className="absolute z-1 right-0 bottom-5 hidden md:inline-block md:max-w-100 lg:max-w-150"
            src={featurePaymentSuit}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
