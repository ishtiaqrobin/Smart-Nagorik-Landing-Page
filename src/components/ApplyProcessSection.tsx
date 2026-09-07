import React from "react";
import img10036 from "../../assets/apply/10036.png";
import img10037 from "../../assets/apply/10037.png";
import img10038 from "../../assets/apply/10038.png";
import img10039 from "../../assets/apply/10039.png";

export const ApplyProcessSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      image: img10036,
      title: "সনদের নামসহ কার্ডে ক্লিক করুন",
    },
    {
      id: 2,
      image: img10037,
      title: "প্রয়োজনীয় তথ্য পূরণ এবং সাবমিট বাটন ক্লিক করে আবেদন সম্পূর্ণ করুন",
    },
    {
      id: 3,
      image: img10038,
      title: "নির্ধারিত সনদ ফি প্রদান করুন",
    },
    {
      id: 4,
      image: img10039,
      title: "আবেদন সফলভাবে সম্পন্ন হলে, প্রক্রিয়া অনুযায়ী সনদ সংগ্রহ করুন",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50/30 via-white to-white py-16 sm:py-24 overflow-hidden">
      {/* Soft warm background glow on right top */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 font-bangla tracking-tight">
            আবেদন প্রক্রিয়া
          </h2>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Illustration Image */}
              <div className="w-full h-48 sm:h-48 lg:h-56 flex items-center justify-center mb-6 px-2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Step Description Text */}
              <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed max-w-[250px] mx-auto font-bangla">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyProcessSection;
