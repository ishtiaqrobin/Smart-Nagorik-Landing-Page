import React from "react";

interface DevelopmentNoticeModalProps {
  isOpen: boolean;
  featureName: string | null;
  onClose: () => void;
}

export const DevelopmentNoticeModal: React.FC<DevelopmentNoticeModalProps> = ({
  isOpen,
  featureName,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border border-slate-100 flex flex-col items-center z-10 animate-in zoom-in-95 duration-200">
        {/* Close X Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Gear / Construction Icon Circle */}
        <div className="w-16 h-16 rounded-full bg-[#e6f8f4] text-[#00b795] flex items-center justify-center mb-4 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Development Badge Tag */}
        <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 font-bangla">
          ওয়েবসাইটের কাজ চলমান
        </span>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-bangla mb-3">
          {featureName ? `"${featureName}"` : "সেবার উন্নয়ন কাজ চলছে"}
        </h3>

        {/* Modal Message */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-bangla mb-7">
          সম্মানিত নাগরিক, স্মার্ট নাগরিক পোর্টালের ডিজিটাল সেবাসমূহের উন্নয়নমূলক কাজ বর্তমানে চলমান রয়েছে। খুব শীঘ্রই এই সেবাটি সম্পূর্ণ অনলাইনেই উন্মুক্ত করা হবে।
        </p>

        {/* Action Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#00b795] hover:bg-[#00a384] text-white font-bold py-3 px-6 rounded-lg text-base font-bangla transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
        >
          ঠিক আছে
        </button>
      </div>
    </div>
  );
};

export default DevelopmentNoticeModal;
