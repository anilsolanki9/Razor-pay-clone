import React from 'react';

const CtaBanner = () => {
  return (
    <div className="relative py-2 w-full overflow-hidden">
      <div className="flex flex-col text-center md:flex-row mx-auto w-fit items-center space-x-3">
        <p className="font-Mulish">
          RazorpayX Payroll: 3 Clicks, Payroll Fixed! Automate payroll now!
        </p>
        <button className="bg-LightBlue text-white px-4 py-2 rounded font-semibold text-sm cursor-pointer">
          Know More
        </button>
      </div>
      {/* left */}
      <div className="flex skew-x-40 h-full absolute -z-1 top-0 -left-15">
        <div className="bg-blue-600 w-20"></div>
        <div className="bg-blue-300 w-2"></div>
        <div className="bg-blue-100 w-40"></div>
        <div className="bg-blue-50 w-40"></div>
      </div>
      {/* right */}
      <div className="flex skew-x-40 h-full absolute  -z-1 top-0 -right-15">
        <div className="bg-blue-50 w-40"></div>
        <div className="bg-blue-100 w-40"></div>
        <div className="bg-blue-300 w-2"></div>
        <div className="bg-blue-600 w-20"></div>
      </div>
    </div>
  );
};

export default CtaBanner;
