import React from 'react';
import dotArrows from '../assets/images/feature-section1-dottedrows.png';
import icon1 from '../assets/images/razorpayXicon.svg';
import icon2 from '../assets/images/autopay-icon.svg';
import icon3 from '../assets/images/magic-checkout.svg';
import icon4 from '../assets/images/payment-button.svg';
import icon5 from '../assets/images/instant-settlement-icon.svg';

const NewFeaturesSection = () => {
  return (
    <div className="relative">
      <div className="w-11/12 max-w-270 mx-auto relative pt-4">
        <img
          src={dotArrows}
          alt=""
          className="absolute w-58.25 left-75 -top-24 -z-10"
        />
        <img
          src={dotArrows}
          alt=""
          className="absolute w-58.25 -right-14 -top-24 -z-10"
        />
        {/* grid box */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-10 gap-x-4 relative z-10">
          {/* item-1 */}
          <div className="relative flex items-center">
            <h2 className="text-center md:text-start mx-auto text-4xl text-DeepBlue font-bold leading-12">
              New in the
              <span className="md:block text-LightBlue"> Razorpay </span>
              <br className="md:hidden" />
              Product Suite
            </h2>
          </div>
          {/* card-1 */}
          <div className="relative w-full max-h-75 cursor-pointer bg-no-repeat bg-[url(./assets/images/instant-settlement-bg.svg)] hover:bg-[url(./assets/images/instant-settlement-bghover.svg)] transition-all duration-200 hover:scale-105 rounded-lg bg-white shadow-md p-10">
            {/* icon image */}
            <img className="w-10 h-10" src={icon1} alt="" />
            <h3 className="text-lg text-DeepBlue font-bold pt-4 font-Mulish">
              Magic Checkout
            </h3>
            <p className="font-Mulish py-3 text-GrayText leading-normal">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>
            {/* hyperlink */}
            <div className="text-LightBlue font-semibold hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer w-fit">
              <a href="#">Know More</a>
              <i className="fa-solid fa-chevron-right text-sm relative"></i>
            </div>
          </div>
          {/* card-2 */}
          <div
            style={{ backgroundPosition: `-2px -2px` }}
            className="relative w-full max-h-75 cursor-pointer bg-no-repeat bg-[url(./assets/images/upi-autopay-bg.svg)] hover:bg-[url(./assets/images/upi-autopay-hoverbg.svg)] transition-all duration-200 hover:scale-105 rounded-lg bg-white shadow-md p-10"
          >
            {/* icon image */}
            <img
              className="rounded-full w-10 h-10 bg-radial-[at_75%_25%] from-blue-400 to-indigo-900 to-100%"
              src={icon2}
              alt=""
            />
            <h3 className="text-lg text-DeepBlue font-bold pt-4 font-Mulish">
              Magic Checkout
            </h3>
            <p className="font-Mulish py-3 text-GrayText leading-normal">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>
            {/* hyperlink */}
            <div className="text-LightBlue font-semibold hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer w-fit">
              <a href="#">Know More</a>
              <i className="fa-solid fa-chevron-right text-sm relative"></i>
            </div>
          </div>
          {/* card-3 */}
          <div
            style={{ backgroundPosition: `-2px -2px` }}
            className="relative w-full max-h-75 cursor-pointer bg-no-repeat bg-[url(./assets/images/magic-checkout-bg.svg)] hover:bg-[url(./assets/images/magic-checkout-hoverbg.svg)] transition-all duration-200 hover:scale-105 rounded-lg bg-white shadow-md p-10"
          >
            {/* icon image */}
            <img
              className="rounded-full w-10 h-10 bg-radial-[at_75%_25%] from-blue-400 to-indigo-900 to-100%"
              src={icon3}
              alt=""
            />
            <h3 className="text-lg text-DeepBlue font-bold pt-4 font-Mulish">
              Magic Checkout
            </h3>
            <p className="font-Mulish py-3 text-GrayText leading-normal">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>
            {/* hyperlink */}
            <div className="text-LightBlue font-semibold hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer w-fit">
              <a href="#">Know More</a>
              <i className="fa-solid fa-chevron-right text-sm relative"></i>
            </div>
          </div>
          {/* card-4 */}
          <div
            style={{ backgroundPosition: `-2px -2px` }}
            className="relative w-full max-h-75 cursor-pointer bg-no-repeat bg-[url(./assets/images/payment-button-bg.svg)] hover:bg-[url(./assets/images/payment-button-hoverbg.svg)] transition-all duration-200 hover:scale-105 rounded-lg bg-white shadow-md p-10"
          >
            {/* icon image */}
            <img
              className="rounded-full w-10 h-10 bg-radial-[at_75%_25%] from-blue-400 to-indigo-900 to-100%"
              src={icon4}
              alt=""
            />
            <h3 className="text-lg text-DeepBlue font-bold pt-4 font-Mulish">
              Magic Checkout
            </h3>
            <p className="font-Mulish py-3 text-GrayText leading-normal">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>
            {/* hyperlink */}
            <div className="text-LightBlue font-semibold hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer w-fit">
              <a href="#">Know More</a>
              <i className="fa-solid fa-chevron-right text-sm relative"></i>
            </div>
          </div>
          {/* card-5 */}
          <div
            style={{ backgroundPosition: `-2px -2px` }}
            className="relative w-full max-h-75 cursor-pointer hover:bg-cover bg-no-repeat bg-[url(./assets/images/instantsettlement-bg.svg)] hover:bg-[url(./assets/images/instantsettlement-hoverbg.svg)] transition-transform duration-200 hover:scale-105 rounded-lg bg-white shadow-md p-10"
          >
            {/* icon image */}
            <img
              className="rounded-full w-10 h-10 bg-radial-[at_75%_25%] from-blue-400 to-indigo-900 to-100%"
              src={icon5}
              alt=""
            />
            <h3 className="text-lg text-DeepBlue font-bold pt-4 font-Mulish">
              Magic Checkout
            </h3>
            <p className="font-Mulish py-3 text-GrayText leading-normal">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>
            {/* hyperlink */}
            <div className="text-LightBlue font-semibold hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer w-fit">
              <a href="#">Know More</a>
              <i className="fa-solid fa-chevron-right text-sm relative"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeaturesSection;
