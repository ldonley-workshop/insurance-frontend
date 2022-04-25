import React from "react";
import { Link } from "react-router-dom";
import { flags, flagStore } from "../../lib/flags";
import { event } from "../../lib/gtm";
const HomeHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="Man with grand child"
            />
            <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Get better care</span>
              <span className="block text-blue-200 font-semibold">
                It is your life
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
              When an issue arises, the last thing you want to think about are
              finances. Our digital tools and large network ensure you get the
              help you need without worry.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link
                  to="/signup"
                  onClick={() =>
                    event({
                      action: "signup",
                      category: "signup",
                      label: "signup",
                    })
                  }
                  className={`flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white ${
                    flags.contrastButtons.isEnabled()
                      ? "text-yellow-700 hover:bg-yellow-50"
                      : "text-blue-700 hover:bg-blue-50"
                  } sm:px-8`}
                >
                  Get started
                </Link>
                <Link
                  to="/plans"
                  onClick={() =>
                    event({
                      action: "viewPlans",
                      category: "viewPlans",
                      label: "viewPlans",
                    })
                  }
                  className={`flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    flags.contrastButtons.isEnabled()
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  } bg-opacity-60 hover:bg-opacity-70 sm:px-8`}
                >
                  Explore plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
