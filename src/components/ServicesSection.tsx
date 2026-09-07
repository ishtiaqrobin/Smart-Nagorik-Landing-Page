import React from "react";

// Import all 30 service icons
import img10006 from "../../assets/services/10006.png";
import img10007 from "../../assets/services/10007.png";
import img10008 from "../../assets/services/10008.png";
import img10009 from "../../assets/services/10009.png";
import img10010 from "../../assets/services/10010.png";
import img10011 from "../../assets/services/10011.png";
import img10012 from "../../assets/services/10012.png";
import img10013 from "../../assets/services/10013.png";
import img10014 from "../../assets/services/10014.png";
import img10015 from "../../assets/services/10015.png";
import img10016 from "../../assets/services/10016.png";
import img10017 from "../../assets/services/10017.png";
import img10018 from "../../assets/services/10018.png";
import img10019 from "../../assets/services/10019.png";
import img10020 from "../../assets/services/10020.png";
import img10021 from "../../assets/services/10021.png";
import img10022 from "../../assets/services/10022.png";
import img10023 from "../../assets/services/10023.png";
import img10024 from "../../assets/services/10024.png";
import img10025 from "../../assets/services/10025.png";
import img10026 from "../../assets/services/10026.png";
import img10027 from "../../assets/services/10027.png";
import img10028 from "../../assets/services/10028.png";
import img10029 from "../../assets/services/10029.png";
import img10030 from "../../assets/services/10030.png";
import img10031 from "../../assets/services/10031.png";
import img10032 from "../../assets/services/10032.png";
import img10033 from "../../assets/services/10033.png";
import img10034 from "../../assets/services/10034.png";
import img10035 from "../../assets/services/10035.png";

interface ServicesSectionProps {
  onServiceClick?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onServiceClick,
}) => {
  const services = [
    { id: 10006, name: "উত্তরাধিকার সনদ", icon: img10006 },
    { id: 10007, name: "ট্রেড লাইসেন্স", icon: img10007 },
    { id: 10008, name: "ওয়ারিশ সনদ", icon: img10008 },
    { id: 10009, name: "নাগরিকত্ব সনদ", icon: img10009 },
    { id: 10010, name: "জাতীয়তা সনদ", icon: img10010 },
    { id: 10011, name: "নতুন ভোটার প্রত্যয়ন", icon: img10011 },
    { id: 10012, name: "ভোটার নিবন্ধন সংক্রান্ত অঙ্গীকারনামা", icon: img10012 },
    { id: 10013, name: "মৃত্যু নিবন্ধন সনদ", icon: img10013 },
    { id: 10014, name: "জাতীয় পরিচয়পত্র সংশোধন প্রত্যয়ন", icon: img10014 },
    { id: 10015, name: "জন্ম নিবন্ধন সংশোধন প্রত্যয়ন", icon: img10015 },
    { id: 10016, name: "আয়ের প্রত্যয়ন", icon: img10016 },
    { id: 10017, name: "পারিবারিক সনদ", icon: img10017 },
    { id: 10018, name: "পারিবারিক সনদ (ইউরোপ)", icon: img10018 },
    { id: 10019, name: "অবিবাহিত সনদ", icon: img10019 },
    { id: 10020, name: "পুনঃ বিবাহ না হওয়া সনদ", icon: img10020 },
    { id: 10021, name: "প্রতিবন্ধী সনদ", icon: img10021 },
    { id: 10022, name: "অনাপত্তি সংক্রান্ত প্রত্যয়ন", icon: img10022 },
    { id: 10023, name: "প্রত্যয়ন পত্র", icon: img10023 },
    { id: 10024, name: "রোহিঙ্গা নয় মর্মে প্রত্যয়ন পত্র", icon: img10024 },
    { id: 10025, name: "ভোটার এলাকা স্থানান্তর প্রত্যয়ন", icon: img10025 },
    { id: 10026, name: "অবকাঠামো নির্মানের অনুমতি পত্র", icon: img10026 },
    { id: 10027, name: "ভূমিহীন সনদ", icon: img10027 },
    { id: 10028, name: "অভিভাবক সম্মতিপত্র", icon: img10028 },
    { id: 10029, name: "একই নামের প্রত্যয়ন", icon: img10029 },
    { id: 10030, name: "চারিত্রিক সনদ", icon: img10030 },
    { id: 10031, name: "নিঃসন্তান প্রত্যয়ন", icon: img10031 },
    { id: 10032, name: "স্থায়ী বাসিন্দা সনদ", icon: img10032 },
    { id: 10033, name: "জীবিত থাকার প্রত্যয়ন", icon: img10033 },
    { id: 10034, name: "কৃষি প্রত্যয়ন", icon: img10034 },
    { id: 10035, name: "বিবাহিত সনদ পত্র", icon: img10035 },
  ];

  const handleCardClick = (name: string) => {
    if (onServiceClick) {
      onServiceClick(name);
    }
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 font-bangla tracking-tight">
            আমাদের সেবাসমূহ
          </h2>
        </div>

        {/* Services Grid (6 columns on lg screens matching screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.name)}
              className="group relative bg-white rounded-lg border border-slate-400/30 p-6 flex flex-col items-center justify-center text-center cursor-pointer transform-gpu transition-all duration-300 ease-out hover:border-[#00b795] hover:-translate-y-1 hover:shadow-md select-none min-h-[170px]"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-md bg-[#e6f8f4] flex items-center justify-center mb-4 transition-transform duration-300">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-sm font-bold text-slate-800 leading-snug font-bangla group-hover:text-[#00b795] transition-colors line-clamp-2">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
