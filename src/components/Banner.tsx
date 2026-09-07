import React from "react";
import bannerBgImg from "../../assets/banner/banner_bg.webp";
import bannerHeroImg from "../../assets/banner/banner.png";
import underLineSvg from "../../assets/banner/under_text_line.svg";
import humanSvg from "../../assets/banner/human.svg";
import homeSvg from "../../assets/banner/home.svg";

interface BannerProps {
  onActionClick?: (action: string) => void;
}

export const Banner: React.FC<BannerProps> = ({ onActionClick }) => {
  const handleClick = (action: string) => {
    if (onActionClick) {
      onActionClick(action);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat pt-12 pb-14 md:pt-16 md:pb-24 lg:pt-28 lg:pb-28"
      style={{
        backgroundImage: `url(${bannerBgImg})`,
        backgroundColor: "#f9fcfb",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Heading, Subtitle, CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            {/* Title with yellow decorative curve */}
            <div className="relative inline-block mb-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-800 tracking-tight leading-tight">
                স্মার্ট নাগরিক
              </h1>
              <div className="mt-1 -ml-1">
                <img
                  src={underLineSvg}
                  alt=""
                  className="w-44 sm:w-52 h-auto object-contain"
                />
              </div>
            </div>

            {/* Tagline / Mission quote */}
            <p className="mt-5 text-slate-700 text-lg sm:text-xl leading-relaxed max-w-lg font-normal">
              “সকল নাগরিক সেবা হাতের মুঠোয় ও ইউনিয়নের সকল সেবা প্রদান ডিজিটালের মাধ্যমে স্মার্ট ও ডিজিটাল বাংলাদেশ গড়াই আমাদের <br /> ভিশন”
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleClick("নাগরিক লগইন")}
                className="inline-flex items-center justify-center border border-[#00b795] text-[#00b795] bg-[#00b795]/[0.05] px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                নাগরিক লগইন
              </button>
              <button
                type="button"
                onClick={() => handleClick("নাগরিক রেজিস্ট্রেশন")}
                className="inline-flex items-center justify-center bg-[#00b795] hover:bg-[#00a384] text-white px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
              >
                নাগরিক রেজিস্ট্রেশন
              </button>
            </div>
          </div>

          {/* Right Column: Hero Illustration + Stat Items */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 mt-6 lg:mt-0">
            {/* Hero Illustration Image */}
            <div className="w-full flex-1 max-w-[520px] sm:max-w-[560px] lg:max-w-[580px]">
              <img
                src={bannerHeroImg}
                alt="স্মার্ট নাগরিক সেবা"
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {/* Right Stat Items Stack */}
            <div className="flex sm:flex-col items-center sm:items-start justify-center gap-8 sm:gap-10 flex-shrink-0">
              {/* Stat Item 1: Citizen Services */}
              <div className="flex items-center gap-3.5 select-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-slate-100/80">
                  <img
                    src={humanSvg}
                    alt="নাগরিক সেবা"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight tracking-tight">
                    ৪০+
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                    নাগরিক সেবা
                  </span>
                </div>
              </div>

              {/* Stat Item 2: Active Unions */}
              <div className="flex items-center gap-3.5 select-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-slate-100/80">
                  <img
                    src={homeSvg}
                    alt="সক্রিয় ইউনিয়ন"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight tracking-tight">
                    ৮৫০+
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                    সক্রিয় ইউনিয়ন
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
