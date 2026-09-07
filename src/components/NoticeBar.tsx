import React from "react";

export const NoticeBar: React.FC = () => {
  return (
    <div className="w-full bg-[#e6f8f4] border-b border-[#00b795]/20 text-[#008f74] py-2 px-4 text-sm font-medium font-bangla flex items-center overflow-hidden z-[101] relative select-none">
      {/* Notice Badge Label */}
      <div className="flex items-center shrink-0 z-10 bg-[#00b795] text-white px-2.5 py-0.5 rounded text-xs font-bold mr-3 shadow-xs">
        <span>📢 নোটিশ:</span>
      </div>

      {/* Running Marquee Text Area */}
      <div className="overflow-hidden w-full relative flex items-center">
        <div className="animate-marquee font-medium text-slate-800 tracking-wide">
          স্মার্ট নাগরিক ডিজিটাল পোর্টালে ওয়েবসাইটের উন্নয়নমূলক কাজ সফলভাবে চলমান রয়েছে। সকল নাগরিক সেবা অতি শীঘ্রই সরাসরি অনলাইনে উন্মুক্ত করা হবে। সাময়িক অনুসন্ধানের জন্য ধন্যবাদ।
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
