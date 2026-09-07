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
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28"
      style={{
        backgroundImage: `url(${bannerBgImg})`,
        backgroundColor: "#fdfefe",
      }}
    >
      {/* Decorative ambient lighting glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Title with yellow decorative curve */}
            <div className="relative inline-block mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-800 tracking-tight leading-tight">
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
            <p className="mt-4 text-slate-700 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-xl font-normal">
              “সকল নাগরিক সেবা হাতের মুঠোয় ও ইউনিয়নের সকল সেবা প্রদান ডিজিটালের মাধ্যমে স্মার্ট ও ডিজিটাল বাংলাদেশ গড়াই আমাদের ভিশন”
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleClick("নাগরিক লগইন")}
                className="inline-flex items-center justify-center border border-[#00b795] text-[#00b795] bg-[#00b795]/[0.06] px-7 py-3 rounded-md font-medium text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                নাগরিক লগইন
              </button>
              <button
                type="button"
                onClick={() => handleClick("নাগরিক রেজিস্ট্রেশন")}
                className="inline-flex items-center justify-center bg-[#00b795] hover:bg-[#00a384] text-white px-7 py-3 rounded-md font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                নাগরিক রেজিস্ট্রেশন
              </button>
            </div>
          </div>

          {/* Right Column: Hero Illustration + Floating Stat Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative max-w-[540px] w-full flex items-center justify-center">
              {/* Illustration Image */}
              <img
                src={bannerHeroImg}
                alt="স্মার্ট নাগরিক সেবা"
                className="w-full h-auto object-contain select-none drop-shadow-sm"
              />

              {/* Floating Stat Badges container */}
              <div className="absolute -right-2 sm:-right-10 lg:-right-14 top-1/4 -translate-y-6 flex flex-col gap-4 z-20">
                {/* Badge 1: Citizen Services */}
                <div className="animate-float-1 bg-white rounded-xl py-3 px-4 sm:px-5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-3.5 transition-all hover:scale-105 select-none">
                  <div className="w-11 h-11 rounded-lg bg-[#e6f8f4] flex items-center justify-center flex-shrink-0">
                    <img
                      src={humanSvg}
                      alt="নাগরিক সেবা"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                      80+
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-slate-500 font-medium whitespace-nowrap">
                      নাগরিক সেবা
                    </span>
                  </div>
                </div>

                {/* Badge 2: Active Unions */}
                <div className="animate-float-2 bg-white rounded-xl py-3 px-4 sm:px-5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-3.5 transition-all hover:scale-105 select-none">
                  <div className="w-11 h-11 rounded-lg bg-[#e6f8f4] flex items-center justify-center flex-shrink-0">
                    <img
                      src={homeSvg}
                      alt="সক্রিয় ইউনিয়ন"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                      ৮৫০+
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-slate-500 font-medium whitespace-nowrap">
                      সক্রিয় ইউনিয়ন
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
