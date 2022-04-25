import React from "react";
import AppNav from "../navigation/AppNav";
import AppFooter from "../sections/AppFooter";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <AppNav />
      <main>
        <div>{children}</div>
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
