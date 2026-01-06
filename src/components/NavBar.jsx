import React from 'react';
import logoImg from '../assets/images/logo.svg';
import flagIND from '../assets/images/india-flag.svg';

const NavBar = () => {
  return (
    <div className="w-full bg-DeepBlue">
      <div className="w-10/12 relative max-w-270 mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="/" className="cursor-pointer py-7 pr-7">
          <img src={logoImg} alt="" className="w-31.25 h-7.5" />
        </a>

        {/* Nav links */}
        <ul className="space-x-6 font-Mulish text-[15px] hidden lg:flex items-center">
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Payments</a>
            <div className="h-1 w-0 bg-LightBlue absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Banking</a>
            <div className="h-1 w-0 bg-LightBlue absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Corporate Card</a>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Payroll</a>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Resources</a>
            <div className="h-1 w-0 bg-LightBlue absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Support</a>
            <div className="h-1 w-0 bg-LightBlue absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
          </li>
          {/*  */}
          <li className="text-white font-Mulish py-7 hover:text-LightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Pricing</a>
            <div className="h-1 w-0 bg-LightBlue absolute bottom-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
          </li>
        </ul>

        {/* right nav buttons */}
        <div className="flex space-x-6">
          <img className="hidden lg:block" src={flagIND} alt="" />
          <button className="border border-LightBlue px-5 py-3 rounded text-white font-semibold font-Mulish cursor-pointer hidden sm:block">
            Log in
          </button>
          <button className="border bg-white text-LightBlue-300 border-GrayText px-5 py-3 rounded font-semibold text-sm hover:text-LightBlue-500 transition-all duration-200 font-Mulish cursor-pointer hidden lg:flex items-center gap-1">
            Sign Up <i className="fa-solid fa-arrow-right"></i>
          </button>
          {/* Mobile view Menu icon */}
          <div className="flex lg:hidden justify-center items-center text-white/85">
            <i className="fa-solid fa-bars blcock lg:hidden text-3xl "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
