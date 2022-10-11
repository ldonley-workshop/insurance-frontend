import React from "react";
import MarketingNav from "../navigation/MarketingNav";
import Footer from "../sections/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
