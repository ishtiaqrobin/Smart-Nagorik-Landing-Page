import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { ServicesSection } from "./components/ServicesSection";
import { ApplyProcessSection } from "./components/ApplyProcessSection";
import { WhySmartNagorikSection } from "./components/WhySmartNagorikSection";
import { FaqSection } from "./components/FaqSection";
import { StartServiceCtaSection } from "./components/StartServiceCtaSection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAction = (itemName: string) => {
    setToastMessage(`"${itemName}" নির্বাচন করা হয়েছে।`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-bangla antialiased text-slate-800 relative">
      {/* Interactive Toast Notification for dummy links */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="bg-slate-900/90 backdrop-blur-sm text-white px-5 py-3 rounded-lg shadow-xl text-sm flex items-center gap-3 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#00b795] animate-pulse"></span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#00b795] hover:bg-[#00a384] text-[#ffffff] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Main Navigation Bar */}
      <Navbar onNavClick={handleAction} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Banner onActionClick={handleAction} />

        {/* Our Services Section */}
        <ServicesSection onServiceClick={handleAction} />

        {/* Application Process Section */}
        <ApplyProcessSection />

        {/* Why Smart Nagorik Section */}
        <WhySmartNagorikSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Start Service CTA Section */}
        <StartServiceCtaSection onCtaClick={handleAction} />
      </main>

      {/* Footer Section */}
      <Footer onFooterLinkClick={handleAction} />
    </div>
  );
};

export default App;
