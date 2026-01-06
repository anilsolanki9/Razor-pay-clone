import React from 'react';
import paymentIcon1 from '../assets/images/payment-link-icon.svg';
import paymentIcon2 from '../assets/images/payment-pages-icon.svg';
import paymentIcon3 from '../assets/images/payment-buttons-icon.svg';
import paymentIcon4 from '../assets/images/subscriptions-icon.svg';
import paymentIcon5 from '../assets/images/route-icon.svg';
import paymentIcon6 from '../assets/images/smart-collect-icon.svg';
import paymentCardWave from '../assets/images/features-wave.svg';

const PaymentGrid = () => {
    return (
        <div className="mt-10">
            <div className="w-10/12 max-w-270 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* box1 */}
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon1}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Payment Links</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
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
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon2}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Payment Pages</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Take your store online instantly with zero coding. Accept international & domestic
                                payments
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
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon3}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Payment Buttons</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments &
                                more
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
                {/* box4 */}
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon4}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Subscriptions</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Subscription plans with automated recurring transactions on various payment modes.
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
                {/* box5 */}
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon5}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Route</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Split incoming payments auto- matically to vendor’s accounts, manage marketplace money
                                flow...
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
                {/* box6 */}
                <div className="w-full min-h-60 relative cursor-pointer FeatureCard group">
                    <img
                        className="bg-LightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-8 transition-all duration-200 FeatureCardIcon"
                        src={paymentIcon6}
                        alt=""
                    />
                    {/* box shape */}
                    <svg
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-9 FeatureCardSVG transition-all duration-200"
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

                    {/* box content */}
                    <div className="font-Mulish absolute z-10 w-full h-full flex flex-col justify-between pl-5 pr-8 py-6 FeatureCardContent">
                        {/* text part */}
                        <div>
                            <h3 className="text-2xl font-bold text-DeepBlue leading-[1.2] ">Smart Collect</h3>
                            <p className="font-Mulish text-GrayText mt-6">
                                Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts &
                                UPI-IDs
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
        </div>
    );
};

export default PaymentGrid;
