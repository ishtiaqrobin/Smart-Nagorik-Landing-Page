import React, { useState } from "react";
import logoImg from "../../assets/footer/footer.png";
import hamburgerSvg from "../../assets/navbar/hamburger.svg";
import closeImg from "../../assets/navbar/close.png";

interface NavbarProps {
  onNavClick?: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("প্রথম পাতা");

  const navLinks = [
    { name: "প্রথম পাতা", id: "home" },
    { name: "সনদ যাচাই", id: "sonod-verify" },
    { name: "হোল্ডিং ট্যাক্স", id: "holding-tax" },
    { name: "নাগরিক লগইন", id: "citizen-login" },
  ];

  const handleLinkClick = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem(name);
    setMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick(name);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick("প্রথম পাতা", e)}
              className="flex items-center gap-2 group transition-transform hover:opacity-95"
            >
              <img
                src={logoImg}
                alt="স্মার্ট নাগরিক"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.name, e)}
                  className={`relative text-base font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-[#00b795] font-semibold"
                      : "text-slate-700 hover:text-[#00b795]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b795] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Auth Action Buttons */}
          <div className="hidden md:flex items-center space-x-3.5">
            <button
              onClick={(e) => handleLinkClick("প্রতিষ্ঠান লগইন", e)}
              className="inline-flex items-center justify-center border border-[#00b795] text-[#00b795] bg-[#00b795]/[0.05] px-4 lg:px-5 py-2 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer"
            >
              প্রতিষ্ঠান লগইন
            </button>
            <button
              onClick={(e) => handleLinkClick("রেজিস্ট্রেশন", e)}
              className="inline-flex items-center justify-center bg-[#00b795] hover:bg-[#00a384] text-white px-5 lg:px-6 py-2 rounded-md font-medium text-sm shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              রেজিস্ট্রেশন
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <img src={closeImg} alt="Close Menu" className="w-6 h-6 object-contain" />
              ) : (
                <img src={hamburgerSvg} alt="Open Menu" className="w-6 h-6 object-contain" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.name, e)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#00b795]/10 text-[#00b795] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#00b795]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={(e) => handleLinkClick("প্রতিষ্ঠান লগইন", e)}
              className="w-full text-center border border-[#00b795] text-[#00b795] bg-[#00b795]/[0.05] hover:bg-[#00b795] hover:text-white py-2.5 rounded-md font-medium text-sm transition-all"
            >
              প্রতিষ্ঠান লগইন
            </button>
            <button
              onClick={(e) => handleLinkClick("রেজিস্ট্রেশন", e)}
              className="w-full text-center bg-[#00b795] hover:bg-[#00a384] text-white py-2.5 rounded-md font-medium text-sm shadow-sm transition-all"
            >
              রেজিস্ট্রেশন
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
