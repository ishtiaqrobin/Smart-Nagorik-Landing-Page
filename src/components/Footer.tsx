import React from "react";
import logoImg from "../../assets/footer/footer.png";

interface FooterProps {
  onFooterLinkClick?: (itemName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onFooterLinkClick }) => {
  const handleLinkClick = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onFooterLinkClick) {
      onFooterLinkClick(name);
    }
  };

  return (
    <footer className="relative w-full bg-white border-t border-slate-200 mt-16 pt-16 pb-8 overflow-hidden">
      {/* Soft ambient lighting glow on left */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
          {/* Column 1: Logo & About */}
          <div className="flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleLinkClick("প্রথম পাতা", e)}
              className="mb-6 block group"
            >
              <img
                src={logoImg}
                alt="স্মার্ট নাগরিক"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-slate-800 text-base leading-relaxed font-bangla max-w-sm">
              সকল নাগরিক সেবা হাতের মুঠোয় এবং ইউনিয়নের সকল সেবা ডিজিটালের মাধ্যমে স্মার্ট ও ডিজিটাল বাংলাদেশ আমাদের ভিশন।
            </p>
          </div>

          {/* Column 2: কোম্পানি (Company Links) */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 font-bangla mb-5">
              কোম্পানি
            </h3>
            <ul className="flex flex-col space-y-3.5 text-base font-medium font-bangla">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick("প্রথম পাতা", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  প্রথম পাতা
                </a>
              </li>
              <li>
                <a
                  href="#institution-login"
                  onClick={(e) => handleLinkClick("প্রতিষ্ঠান লগইন", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  প্রতিষ্ঠান লগইন
                </a>
              </li>
              <li>
                <a
                  href="#institution-register"
                  onClick={(e) => handleLinkClick("প্রতিষ্ঠান রেজিস্ট্রেশন", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  প্রতিষ্ঠান রেজিস্ট্রেশন
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: সেবা (Services Links) */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 font-bangla mb-5">
              সেবা
            </h3>
            <ul className="flex flex-col space-y-3.5 text-base font-medium font-bangla">
              <li>
                <a
                  href="#sonod-verify"
                  onClick={(e) => handleLinkClick("সনদ যাচাই করুন", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  সনদ যাচাই করুন
                </a>
              </li>
              <li>
                <a
                  href="#holding-tax"
                  onClick={(e) => handleLinkClick("হোল্ডিং ট্যাক্স যাচাই", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  হোল্ডিং ট্যাক্স যাচাই
                </a>
              </li>
              <li>
                <a
                  href="#citizen-register"
                  onClick={(e) => handleLinkClick("নাগরিক রেজিস্ট্রেশন", e)}
                  className="text-slate-800 hover:text-[#00b795] transition-colors"
                >
                  নাগরিক রেজিস্ট্রেশন
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: যোগাযোগ (Contact Info & Socials) */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 font-bangla mb-5">
              যোগাযোগ
            </h3>
            <ul className="flex flex-col space-y-3.5 text-base font-medium text-slate-800">
              <li>+880 1328 799 711</li>
              <li>info.smartnagorik@gmail.com</li>
              <li>smartnagorik.com.bd</li>
            </ul>

            {/* Social Media Circle Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                aria-label="Facebook"
                onClick={(e) => handleLinkClick("Facebook", e)}
                className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white text-slate-800 text-sm font-semibold hover:bg-[#00b795]/15 hover:border-[#00b795] transition-all flex items-center justify-center cursor-pointer"
              >
                f
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                onClick={(e) => handleLinkClick("LinkedIn", e)}
                className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white text-slate-800 text-sm font-semibold hover:bg-[#00b795]/15 hover:border-[#00b795] transition-all flex items-center justify-center cursor-pointer"
              >
                in
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-100 pt-0 sm:pt-5 pb-2 text-center">
          <p className="text-slate-800 text-base font-medium font-bangla">
            কপিরাইট © ২০২১ - ২০২৬ স্মার্ট নাগরিক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
