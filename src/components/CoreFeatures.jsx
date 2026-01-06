import React from 'react';
import i1 from '../assets/images/instant-activation-icon.svg';
import i2 from '../assets/images/easy-integration.svg';
import i3 from '../assets/images/api-driven-icon.svg';
import i4 from '../assets/images/payment-modes.svg';
import i5 from '../assets/images/simple-pricing.svg';
import i6 from '../assets/images/industry-support-icon.svg';
import i7 from '../assets/images/dashboard-reporting-icon.svg';
import i8 from '../assets/images/secure-icon.svg';

const CoreFeatures = () => {
  return (
    <div className="bg-[url(./assets/images/core-features-sectionBg.svg)] bg-no-repeat bg-cover mt-14 pb-50 pt-50 bg-center relative z-10">
      <div className="w-11/12 max-w-270 mx-auto relative pt-4">
        <h2 className="text-center font-bold text-2xl text-white">Features</h2>
        <div className="w-6 h-1 bg-GreenLight mx-auto mt-4 mb-6"></div>
        <p className="text-white leading-normal text-center font-Mulish max-w-112.5 mx-auto">
          Empower your business with all the right tools to accept online
          payments and provide the best customer experience
        </p>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* card-1 */}
          <div className="space-y-3">
            <img src={i1} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-2 */}
          <div className="space-y-3">
            <img src={i2} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-3 */}
          <div className="space-y-3">
            <img src={i3} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-4 */}
          <div className="space-y-3">
            <img src={i4} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-5 */}
          <div className="space-y-3">
            <img src={i5} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-6 */}
          <div className="space-y-3">
            <img src={i6} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-7 */}
          <div className="space-y-3">
            <img src={i7} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
          {/* card-8 */}
          <div className="space-y-3">
            <img src={i8} alt="" />
            <h3 className="font-bold text-lg text-white">Instant Activation</h3>
            <p className="text-white/90  font-Mulish">
              Get activated and transact within 2 minutes. Completely online
              onboarding with minimum documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
