import React from "react";

interface StartServiceCtaSectionProps {
  onCtaClick?: (action: string) => void;
}

export const StartServiceCtaSection: React.FC<StartServiceCtaSectionProps> = ({
  onCtaClick,
}) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick("নাগরিক রেজিস্ট্রেশন");
    }
  };

  return (
    <section className="w-full bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width CTA Banner Card */}
        <div className="w-full bg-[#00b795] rounded-2xl py-14 sm:py-16 px-6 sm:px-12 flex flex-col items-center justify-center text-center text-white shadow-md">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white font-bangla mb-4 tracking-tight leading-tight">
            স্মার্ট নাগরিক সেবা শুরু করুন
          </h2>

          {/* Subtitle */}
          <p className="text-white/95 text-base sm:text-lg font-medium font-bangla mb-8 max-w-xl">
            নাগরিক সেবা ডিজিটালি নিতে এখনই নিবন্ধন করুন
          </p>

          {/* White CTA Button */}
          <button
            type="button"
            onClick={handleClick}
            className="bg-white hover:bg-slate-50 text-[#00b795] font-bold px-8 py-3 rounded-md text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none"
          >
            নাগরিক রেজিস্ট্রেশন
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartServiceCtaSection;
