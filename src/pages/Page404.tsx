import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-top sm:bg-top"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1482267809812-e43cbecdd456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold text-black text-opacity-75 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
          I think you took a wrong turn.
        </h1>
        <p className="mt-2 text-lg font-medium text-black text-opacity-75">
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white bg-opacity-90 sm:bg-opacity-25 sm:hover:bg-opacity-50"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page404;
