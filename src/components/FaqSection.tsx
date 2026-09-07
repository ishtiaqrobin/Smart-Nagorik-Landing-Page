import React, { useState } from "react";

import minusSvg from "../../assets/svg/faq/10048.svg";
import plusSvg from "../../assets/svg/faq/10049.svg";

export const FaqSection: React.FC = () => {
  // First item open by default matching screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "স্মার্ট নাগরিক কী?",
      answer:
        "স্মার্ট নাগরিক হলো ইউনিয়ন পরিষদের নাগরিক সেবা, সনদ আবেদন, যাচাই ও ব্যবস্থাপনা ডিজিটালভাবে পরিচালনার একটি প্ল্যাটফর্ম।",
    },
    {
      question: "কোন কোন সেবায় আবেদন করা যায়?",
      answer:
        "হোম পেজের আমাদের সেবাসমূহ অংশে যেসব সেবা দেখানো আছে, সেগুলোতে নাগরিকরা সরাসরি আবেদন করতে পারেন।",
    },
    {
      question: "আবেদনের অবস্থা কীভাবে জানা যাবে?",
      answer:
        "সনদ যাচাই বা নাগরিক ড্যাশবোর্ড থেকে আবেদনের বর্তমান অবস্থা দেখা যায়।",
    },
    {
      question: "হোল্ডিং ট্যাক্স যাচাই করা যাবে?",
      answer:
        "হ্যাঁ, হোল্ডিং ট্যাক্স যাচাই মেনু থেকে প্রয়োজনীয় তথ্য দিয়ে যাচাই করা যাবে।",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 font-bangla tracking-tight">
            সাধারণ প্রশ্ন
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className={`rounded-lg transition-all duration-300 cursor-pointer overflow-hidden select-none ${
                  isOpen
                    ? "bg-white border border-[#00b795] p-6 shadow-sm"
                    : "bg-[#fbfdfc] hover:bg-white border border-slate-400/30 p-6"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bangla">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <img
                      src={isOpen ? minusSvg : plusSvg}
                      alt={isOpen ? "Collapse" : "Expand"}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>

                {/* Answer Content */}
                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100/80 animate-in fade-in duration-300 transition-all">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-bangla">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
