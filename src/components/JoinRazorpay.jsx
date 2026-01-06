import React from 'react';
import companies from '../assets/images/comanies.png';

const JoinRazorpay = () => {
  return (
    <div className="relative -mt-50 bg-[#F4F8FF] pt-40 pb-12">
      <div className="w-11/12 max-w-270 mx-auto relative flex flex-col md:flex-row">
        {/* left */}
        <div className="flex flex-col justify-center max-w-[calc(100% - 500px)]">
          <h2 className=" text-2xl font-bold text-DeepBlueHead">
            Join the 50,00,000+ businesses using Razorpay
          </h2>
          <div className="w-6 h-1 bg-GreenLight my-4 mb-10 "></div>
          <p className=" font-Mulish pb-6">
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </p>
          <p className=" font-Mulish">
            Focus on your business while we handle the complexities of payments
            for you.
          </p>
        </div>
        {/* right */}
        <div className="h-125 mx-auto min-w-125 mt-24 md:mt-0 overflow-y-hidden relative">
          <img
            width={'500px'}
            className="h-auto absolute object-cover moveImg"
            src={companies}
            alt=""
          />
          <div className="absolute left-0 right-0 top-0 h-40 z-1 bg-linear-180 from-[#F4F8FF] to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-40 z-1 bg-linear-0 from-[#F4F8FF] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default JoinRazorpay;
