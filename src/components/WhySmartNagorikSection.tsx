import React from "react";

// Import SVGs for Why Smart Nagorik section
import svg10040 from "../../assets/svg/smart_citizen/10040.svg";
import svg10041 from "../../assets/svg/smart_citizen/10041.svg";
import svg10042 from "../../assets/svg/smart_citizen/10042.svg";
import svg10043 from "../../assets/svg/smart_citizen/10043.svg";
import svg10044 from "../../assets/svg/smart_citizen/10044.svg";
import svgHuman from "../../assets/svg/smart_citizen/human.svg";

export const WhySmartNagorikSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "অনলাইন আবেদন",
      description: "নাগরিকরা ঘরে বসে প্রয়োজনীয় সনদের আবেদন করতে পারেন।",
      icon: svg10040,
    },
    {
      id: 2,
      title: "আবেদন যাচাই",
      description: "সনদ, আবেদন ও হোল্ডিং ট্যাক্স এর অবস্থা দ্রুত যাচাই করা যায়।",
      icon: svg10041,
    },
    {
      id: 3,
      title: "ইউনিয়ন ম্যানেজমেন্ট",
      description: "ইউনিয়নের দৈনন্দিন নাগরিক সেবা এক জায়গা থেকে পরিচালনা করা যায়।",
      icon: svg10042,
    },
    {
      id: 4,
      title: "ডিজিটাল পেমেন্ট",
      description: "নির্ধারিত সেবার ফি অনলাইনে পরিশোধের সুবিধা রয়েছে।",
      icon: svg10043,
    },
    {
      id: 5,
      title: "নাগরিক ড্যাশবোর্ড",
      description: "নিবন্ধিত নাগরিক নিজের আবেদন, সনদ ও তথ্য সহজে দেখতে পারেন।",
      icon: svg10044,
    },
    {
      id: 6,
      title: "সহজ সহায়তা",
      description: "ডিজিটাল সেবা ব্যবহারে দ্রুত সহায়তা ও পরিষ্কার তথ্য পাওয়া যায়।",
      icon: svgHuman,
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 font-bangla tracking-tight">
            কেন স্মার্ট নাগরিক?
          </h2>
        </div>

        {/* 6 Feature Cards Grid (3 columns on lg matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-lg border border-slate-400/30 p-7 flex flex-col items-start text-left transform-gpu transition-all duration-300 ease-out hover:border-[#00b795] hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-md bg-[#e6f8f4] flex items-center justify-center mb-6 flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-slate-900 font-bangla mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-bangla">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySmartNagorikSection;
