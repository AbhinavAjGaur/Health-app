import React, { useState } from 'react';
import { membershipPlans } from '../constants/constants';

const Membership = () => {


  return (
    <div id='membership' className="text-white py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header text */}
        <p className="text-center text-[10px] uppercase tracking-wider mb-2">
          UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS
        </p>

        {/* Title */}
        <h1 className="text-center text-gray-300 text-4xl md:text-8xl font-bold mb-12 md:mb-16">
          MEMBERSHIPS
        </h1>

        {/* Membership cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {membershipPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-black">
              <p className="uppercase font-medium mb-4">{plan.title}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Membership
