import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginError from "../error/Error";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const history = useHistory();

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    auth.signIn(username, password);
    if (auth.error) {
      return;
    }
    history.push("/");
  };

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <text y="32" fontSize="32">
              🐝
            </text>
          </svg>
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            sign up now
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form onSubmit={formSubmit} className="space-y-6">
            <LoginError />
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-8 space-y-2 space-x-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
              type="button"
              onClick={() => {
                setUsername("betauser");
                setPassword("betauser");
              }}
            >
              betauser / betauser
            </button>
            <button
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
              type="button"
              onClick={() => {
                setUsername("regularuser");
                setPassword("regularuser");
              }}
            >
              regularuser / regularuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
