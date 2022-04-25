import React from "react";

const FullpageFormLayout = ({
  children,
  artUrl,
}: {
  children: React.ReactNode;
  artUrl: string;
}) => {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {children}
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={artUrl}
          alt="Art"
        />
      </div>
    </div>
  );
};

export default FullpageFormLayout;
