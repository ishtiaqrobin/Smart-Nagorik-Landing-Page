import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAction = (itemName: string) => {
    setToastMessage(`"${itemName}" নির্বাচন করা হয়েছে (এটি ডামি লিঙ্ক)`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-bangla antialiased text-slate-800">
      {/* Interactive Toast Notification for dummy links */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="bg-slate-900/90 backdrop-blur-sm text-white px-5 py-3 rounded-lg shadow-xl text-sm flex items-center gap-3 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#00b795] animate-pulse"></span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar onNavClick={handleAction} />

      {/* Banner / Hero Section */}
      <main className="flex-1">
        <Banner onActionClick={handleAction} />
      </main>
    </div>
  );
};

export default App;
