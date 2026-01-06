import React from 'react';
import logodark from '../assets/images/logo-dark.svg';
import c1 from '../assets/images/footer-certificate-1.png';
import c2 from '../assets/images/footer-certificate-2.jpg';
import i1 from '../assets/images/facebook-icon.svg';
import i2 from '../assets/images/twitter-icon.svg';
import i3 from '../assets/images/instagram-icon.svg';
import i4 from '../assets/images/github-icon.svg';
import i5 from '../assets/images/linkedin-icon.svg';

const Footer = () => {
  return (
    <div className="relative bg-[#EDF8FF] -mt-50 pt-70 pb-10">
      <div className="w-11/12  max-w-270  mx-auto flex flex-col lg:flex-row justify-between">
        <div className="max-w-90 md:max-w-70">
          <img className="h-6.5" src={logodark} alt="" />
          <p className="text-sm text-GrayText py-3">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p className="text-sm text-GrayText py-3">
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.
          </p>
          <p className="text-sm text-GrayText py-3">
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
          </p>
          <p className="text-xs text-GrayText py-3">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered account is provided by our partner bank, in accordance with
            RBI regulations. RazorpayX itself is not a bank and doesn't hold or
            claim to hold a banking license.
          </p>
          <h2 className="text-md font-Mulish font-semibold text-GrayBlue uppercase">
            Subscribe to our
            <br /> newsletter
          </h2>
          <form className="text-sm bg-white my-3 flex items-center justify-between rounded focus:border-DeepBlue relative">
            <input
              className="w-full h-full  px-4 py-3 rounded outline-none border-2 border-black/10 focus:border-LightBlue transition-all duration-200"
              type="text"
              name=""
              id=""
              placeholder="Your email address"
            />
            <button className="bg-white rounded right-1 text-LightBlue-300 absolute flex items-center justify-center space-x-1 font-semibold cursor-pointer hover:text-LightBlue-500 transition-all duration-200">
              <span>Subscribe</span>
              <i className="ri-arrow-right-line font-normal"></i>
            </button>
          </form>
          <div className="flex gap-3">
            <img className="w-[44%] h-fit" src={c1} alt="" />
            <img className="w-[54%]" src={c2} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-x-7">
          {/* item-1 */}
          <div className="space-y-3">
            {/* first list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                BANKING PLUS
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    RazorpayX
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Current Accounts
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Payouts
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Payout Links
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Corporate Credit Card
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    View Live Demo
                    <span className="text-white bg-green-500 px-1 py-1 mx-2 rounded text-sm font-semibold">
                      NEW
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* second list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                LENDING
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Razorpay Capital
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Instant Settlements
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Working Capital Loans
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Marketplace Instant Settlements
                  </a>
                </li>
              </ul>
            </div>
            {/* third list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                RISK & FRAUD
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Thirdwatch
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    PrePay CoD
                    <span className="text-white bg-green-500 px-1 py-1 mx-2 rounded text-sm font-semibold">
                      NEW
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* fourth list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                BECOME A PARTNER
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Refer and Earn
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Onboarding APIs
                  </a>
                </li>
              </ul>
            </div>
            {/* fifth list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                MORE
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Route
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Invoices
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Freelancer Payments
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    International
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Flash Checkout
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    UPI
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    ePOS
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Checkout Demo
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    RazorpayX Payroll
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* item-2 */}
          <div className="space-y-3">
            {/* first list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                ACCEPT PAYMENTS
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Payment Gateway
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Payment Pages
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Payment Links
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    QR Codes
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Subscriptions
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Smart Collect
                  </a>
                </li>
              </ul>
            </div>
            {/* second list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                DEVELOPERS
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Docs
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Integrations
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            {/* third list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                RESOURCES
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Blog
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Customer Stories
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Events
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Chargeback Guide
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Settlement Guide
                  </a>
                </li>
              </ul>
            </div>
            {/* fourth list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                SOLUTIONS
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Education
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    E-commerce
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Saas
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    BFSI
                  </a>
                </li>
              </ul>
            </div>
            {/* fifth list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                FREE TOOLS
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    GST Calculator
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Online TDS Payment
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    GST Number Search
                    <span className="text-white bg-green-500 px-1 py-1 mx-2 rounded text-sm font-semibold">
                      NEW
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* item-3 */}
          <div className="space-y-3">
            {/* first list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                COMPANY
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Careers
                    <span className="text-white bg-green-500 px-1 py-1 mx-2 rounded text-sm font-semibold">
                      We're hiring!
                    </span>
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Grievance Redressal
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    White Papers
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Corporate Information
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Responsible Disclosure
                  </a>
                </li>
              </ul>
            </div>
            {/* second list */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                HELP & SUPPORT
              </h2>
              <ul className="space-y-3">
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Support
                  </a>
                </li>
                <li className="font-semibold">
                  <a
                    className="text-LightBlue-500 hover:text-DeepBlueHead transition-all duration-200"
                    href=""
                  >
                    Knowledge base
                  </a>
                </li>
              </ul>
            </div>
            {/* third DIVV */}
            <div className="space-y-2 my-6">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                FIND US ONLINE
              </h2>
              <div className="flex space-x-3">
                <img className="w-6 h-6" src={i1} alt="" />
                <img className="w-6 h-6" src={i2} alt="" />
                <img className="w-6 h-6" src={i3} alt="" />
                <img className="w-6 h-6" src={i4} alt="" />
                <img className="w-6 h-6" src={i5} alt="" />
              </div>
            </div>
            {/* fourth DIVV */}
            <div className="space-y-2">
              <h2 className="font-Mulish font-semibold text-Gray2 mt-2 mb-2">
                REGD. OFFICE ADDRESS
              </h2>
              <p>
                Razorpay Software Private Limited,
                <br /> 1st Floor, SJR Cyber,
                <br /> 22 Laskar Hosur Road, Adugodi,
                <br /> Bengaluru, 560030,
                <br /> Karnataka, India
                <br />
                CIN: U72200KA2013PTC097389
              </p>
              <p className="pt-3">
                © Razorpay 2022
                <br /> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
