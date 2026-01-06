import React from 'react';
import tick from '../assets/images/check.svg';
import paymentCardWave from '../assets/images/features2-wave.svg';
import xflame1 from '../assets/images/x-flame-1.png';
import xflame2 from '../assets/images/x-flame-2.png';
import razorpayXicon from '../assets/images/razorpayX.svg';
import businessBanking from '../assets/images/buisness-banking.png';
import currentIcon from '../assets/images/current-icon.svg';
import capitalcreditIcon from '../assets/images/capital-credit-icon.svg';
import payoutIcon from '../assets/images/payouts-icon.svg';

const FeatureSection2 = () => {
  return (
    <div className="relative overflow-hidden bg-[url(./assets/images/feature-section-2BG.svg)] bg-no-repeat bg-cover pt-30 md:pt-64 pb-60 md:pb-125 mt-14">
      {/* div ke andr ka content */}
      <div className="w-11/12 max-w-270 mx-auto relative pt-4">
        {/* content */}
        <h2 className="text-center font-bold hidden md:block text-2xl leading-[1.2] text-white">
          Explore Razorpay Business Banking
        </h2>
        <h3 className="text-3xl leading-10 block md:hidden font-semibold max-w-125 text-white">
          Explore
          <img
            width={'168px'}
            height={`32px`}
            className="block"
            src={razorpayXicon}
            alt=""
          />
          <span className="text-GreenLight">Business Banking</span>
        </h3>
        <div className="h-1 w-6 bg-GreenLight md:mx-auto mt-4 mb-10 md:mb-20"></div>

        {/* main feature box containing 3 parts */}
        <div className="relative w-full min-h-110 flex flex-col">
          <img
            src={xflame1}
            alt=""
            loading="lazy"
            className="absolute -top-40 -rotate-80 z-10 -right-20 md:z-0 md:rotate-0 md:-top-35.5 md:-left-35 w-50 "
          />
          <img
            src={xflame2}
            alt=""
            loading="lazy"
            className="absolute top-37.5 -right-45 w-50 hidden md:inline-block"
          />

          {/* inner content section */}
          <div className="w-full min-h-60 md:min-h-110 text-white bg-[#181C2E] md:border border-[#525a76] rounded-md relative px-2 md:px-10 py-0 md:py-12 flex overflow-hidden">
            {/* left section */}
            <div className="flex flex-col w-full justify-between relative z-2">
              <h3 className="text-3xl hidden md:block leading-10 font-semibold max-w-125 text-white">
                Manage your company's finances with
                <img
                  width={'168px'}
                  height={`32px`}
                  className="inline-block mx-2"
                  src={razorpayXicon}
                  alt=""
                />
                <span className="text-GreenLight">Business Banking</span>
              </h3>
              <h3 className="text-md md:hidden block leading-6 max-w-50 font-semibold text-white pb-3">
                Open and operate fully‑functional Current Accounts on RazorpayX
              </h3>
              <ul className="space-y-2 text-white">
                <li className="font-Mulish flex items-center space-x-2">
                  {/* icon can be taken from feather icon library */}
                  <img className="" src={tick} alt="" loading="lazy" />
                  <span>Open a fully digital current account</span>
                </li>
                <li className="font-Mulish flex items-center space-x-2">
                  <img className="" src={tick} alt="" loading="lazy" />
                  <span>Automate payables & compliment payments</span>
                </li>
                <li className="font-Mulish flex items-center space-x-2">
                  <img className="" src={tick} alt="" loading="lazy" />
                  <span>Simplify and track spends with Corporate cards</span>
                </li>
                <li className="font-Mulish flex items-center space-x-2">
                  <img className="" src={tick} alt="" loading="lazy" />
                  <span>View financial insights at a glance</span>
                </li>
              </ul>
              {/* button and hyperink */}
              <div className="flex flex-col-reverse md:flex-row md:items-center gap-4">
                {/* button text */}
                <button className="bg-LightBlue px-4.5 py-3.5 rounded-md text-white font-semibold hover:bg-LightBlue-500 transition-all duration-200 cursor-pointer relative flex justify-start items-center md:pr-22.5">
                  Sign Up
                  <div className="w-12 h-15 absolute right-6 flex justify-center items-center bg-GreenLight skew-x-20">
                    <i className="ri-arrow-right-line font-normal -skew-x-20"></i>
                  </div>
                </button>
                {/* hyperlink text */}
                <div className="text-LightBlue font-semibold hover:text-LightBlue-300 transition-all duration-200 font-Mulish cursor-pointer">
                  <a href="#">Know More</a>
                  <i className="fa-solid fa-chevron-right text-sm relative"></i>
                </div>
              </div>
            </div>
            {/* background image */}
            <img
              className="absolute z-1 right-0 bottom-0 w-[52%] hidden md:block md:max-w-100 lg:max-w-125"
              src={businessBanking}
              alt=""
              loading="lazy"
            />
          </div>

          {/* boxes */}
          <div className="my-14 w-full max-w-270 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* box1 */}
            <div className="w-full min-h-60 relative cursor-pointer FeatureCardDark group">
              <img
                className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIconDark"
                src={currentIcon}
                alt=""
              />
              {/* box shape */}
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#525a76] h-full w-full absolute z-9 FeatureCardSVGDark transition-all duration-200"
                style={{ strokeOpacity: '0.8' }}
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
                  fill="#181C2E"
                ></path>
              </svg>

              {/* box content */}
              <div className="font-Mulish absolute z-100 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContentDark">
                {/* text part */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white leading-[1.2] ">
                    Current Account
                  </h3>
                  <p className="font-Mulish text-GrayText mt-6">
                    Current accounts for fast-growing businesses, supported by
                    the best-in-class technology
                  </p>
                </div>

                {/* hyper link part */}
                <div className="text-LightBlue font-semibold hover:text-GrayBlue transition-all duration-200 font-Mulish cursor-pointer w-fit">
                  <a href="#">Know More</a>
                  <i className="fa-solid fa-chevron-right text-sm relative"></i>
                </div>
                <img
                  className="absolute right-0 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  src={paymentCardWave}
                  alt=""
                />
              </div>
            </div>
            {/* box2 */}
            <div className="w-full min-h-60 relative cursor-pointer FeatureCardDark group">
              <img
                className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIconDark"
                src={capitalcreditIcon}
                alt=""
              />
              {/* box shape */}
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#525a76] h-full w-full absolute z-9 FeatureCardSVGDark transition-all duration-200"
                style={{ strokeOpacity: '0.8' }}
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
                  fill="#181C2E"
                ></path>
              </svg>

              {/* box content */}
              <div className="font-Mulish absolute z-100 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContentDark">
                {/* text part */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white leading-[1.2] ">
                    Capital & Credit
                  </h3>
                  <p className="font-Mulish text-GrayText mt-6">
                    Instant additional cash and corporate cards designed for
                    growing businesses
                  </p>
                </div>

                {/* hyper link part */}
                <div className="text-LightBlue font-semibold hover:text-GrayBlue transition-all duration-200 font-Mulish cursor-pointer w-fit">
                  <a href="#">Know More</a>
                  <i className="fa-solid fa-chevron-right text-sm relative"></i>
                </div>
                <img
                  className="absolute right-0 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  src={paymentCardWave}
                  alt=""
                />
              </div>
            </div>
            {/* box3 */}
            <div className="w-full min-h-60 relative cursor-pointer FeatureCardDark group">
              <img
                className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIconDark"
                src={payoutIcon}
                alt=""
              />
              {/* box shape */}
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#525a76] h-full w-full absolute z-9 FeatureCardSVGDark transition-all duration-200"
                style={{ strokeOpacity: '0.8' }}
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
                  fill="#181C2E"
                ></path>
              </svg>

              {/* box content */}
              <div className="font-Mulish absolute z-100 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContentDark">
                {/* text part */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white leading-[1.2] ">
                    Payouts
                  </h3>
                  <p className="font-Mulish text-GrayText mt-6">
                    Make simple, reliable & secure payouts to bank accounts, UPI
                    IDs or wallets
                  </p>
                </div>

                {/* hyper link part */}
                <div className="text-LightBlue font-semibold hover:text-GrayBlue transition-all duration-200 font-Mulish cursor-pointer w-fit">
                  <a href="#">Know More</a>
                  <i className="fa-solid fa-chevron-right text-sm relative"></i>
                </div>
                <img
                  className="absolute right-0 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  src={paymentCardWave}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* demo box */}
          <div className="w-full hidden md:flex-col md:flex lg:flex-row justify-evenly items-center border border-[#525a76] p-10 mb-24 rounded-md gap-y-6">
            <p className="text-white text-xl">
              Check out the live demo to learn how RazorpayX works.
              <span className="ml-2 font-bold">No sign-up required!</span>
            </p>
            {/* button */}
            <button className="bg-LightBlue px-4.5 py-3.5 rounded-md text-white font-semibold font-Mulish hover:bg-LightBlue-500 transition-all duration-200 cursor-pointer relative flex justify-start items-center md:pr-22.5 ">
              Check out the demo
              <div className="w-12 h-15 absolute right-6 flex justify-center items-center bg-GreenLight skew-x-20">
                <i className="ri-arrow-right-line font-normal -skew-x-20"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;
