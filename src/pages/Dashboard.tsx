import React from "react";
import AppLayout from "../components/layouts/appLayout";
import { classNames } from "../lib/utils";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useAuth } from "../hooks/useAuth";

const actions = [
  {
    icon: ClockIcon,
    name: "Account History",
    href: "#",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    icon: BadgeCheckIcon,
    name: "Benefits",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    icon: UsersIcon,
    name: "Schedule an appointment",
    href: "#",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    icon: CashIcon,
    name: "Billing",
    href: "#",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    icon: ReceiptRefundIcon,
    name: "Submit an expense",
    href: "#",
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50",
  },
  {
    icon: AcademicCapIcon,
    name: "Resources",
    href: "#",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
const announcements = [
  {
    id: 1,
    title: "New platform updates",
    href: "#",
    preview:
      "Condimentum suspendisse facilisi pharetra ut orci volutpat est himenaeos augue nec parturient ultricies a condimentum hac integer a nibh ac mus dis id diam condimentum a.",
  },
  {
    id: 2,
    title: "New password policy",
    href: "#",
    preview:
      "Condimentum suspendisse facilisi pharetra ut orci volutpat est himenaeos augue nec parturient ultricies a condimentum hac integer a nibh ac mus dis id diam condimentum a.",
  },
  {
    id: 3,
    title: "Discounts for the upcoming year",
    href: "#",
    preview:
      "Condimentum suspendisse facilisi pharetra ut orci volutpat est himenaeos augue nec parturient ultricies a condimentum hac integer a nibh ac mus dis id diam condimentum a.",
  },
];

const Dashboard = () => {
  const auth = useAuth();

  return (
    <AppLayout>
      <main className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Profile</h1>
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="profile-overview-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                  </h2>
                  <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                          <img
                            className="mx-auto h-20 w-20 rounded-full"
                            src={`https://avatars.dicebear.com/api/open-peeps/${auth.user?.username}.svg`}
                            alt=""
                          />
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                          <p className="text-sm font-medium text-gray-600">
                            Welcome back,
                          </p>
                          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {auth.user?.username}
                          </p>
                          <p className="text-sm font-medium text-gray-600">
                            {auth.user?.betaUser ? "Beta user" : "Regular user"}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center sm:mt-0">
                        <a
                          href="#"
                          className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                    <div className="px-6 py-5 text-sm font-medium text-center">
                      <span className="text-gray-600">
                        {auth.user?.accountType?.replace(/^\w/, (c) =>
                          c.toUpperCase()
                        )}{" "}
                        plan
                      </span>
                    </div>
                    <div className="px-6 py-5 text-sm font-medium text-center">
                      <span className="text-gray-900">3 mo</span>{" "}
                      <span className="text-gray-600">
                        until next appointment
                      </span>
                    </div>
                    <div className="px-6 py-5 text-sm font-medium text-center">
                      <span className="text-gray-900">1</span>{" "}
                      <span className="text-gray-600">check-in this year</span>
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="quick-links-title">
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                  <h2 className="sr-only" id="quick-links-title">
                    Quick links
                  </h2>
                  {actions.map((action, actionIdx) => (
                    <div
                      key={action.name}
                      className={classNames(
                        actionIdx === 0
                          ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                          : "",
                        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                        actionIdx === actions.length - 2
                          ? "sm:rounded-bl-lg"
                          : "",
                        actionIdx === actions.length - 1
                          ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                          : "",
                        "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500"
                      )}
                    >
                      <div>
                        <span
                          className={classNames(
                            action.iconBackground,
                            action.iconForeground,
                            "rounded-lg inline-flex p-3 ring-4 ring-white"
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-medium">
                          <a href={action.href} className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {action.name}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Quisque nisi consectetur facilisis inceptos ut id at
                          velit sodales vestibulum dictumst lectus a himenaeos
                          suspendisse dignissim convallis maecenas aenean nisl
                          mattis a fringilla a adipiscing velit duis.
                        </p>
                      </div>
                      <span
                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="announcements-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <h2
                      className="text-base font-medium text-gray-900"
                      id="announcements-title"
                    >
                      Announcements
                    </h2>
                    <div className="flow-root mt-6">
                      <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                      >
                        {announcements.map((announcement) => (
                          <li key={announcement.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                              <h3 className="text-sm font-semibold text-gray-800">
                                <a
                                  href={announcement.href}
                                  className="hover:underline focus:outline-none"
                                >
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {announcement.title}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                {announcement.preview}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Dashboard;
