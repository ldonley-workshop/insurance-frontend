import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../lib/utils";
import { SearchIcon } from "@heroicons/react/solid";
import { useAuth } from "../../hooks/useAuth";
import Rox from "rox-browser";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Your Plan", href: "#", current: false },
  { name: "Your Doctor", href: "#", current: false },
  { name: "Your Prescriptions", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];

const AppNav = () => {
  const auth = useAuth();
  const signOut = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    auth.signOut();
  };
  return (
    <Popover
      as="header"
      className="pb-24 bg-gradient-to-r from-blue-800 to-blue-600"
    >
      {({ open }) => (
        <>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              <div className="absolute left-0 py-5 flex-shrink-0 lg:static flex">
                <a href="/">
                  <span className="sr-only">InsuranceHive</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                    <text y="32" fontSize="32">
                      🐝
                    </text>
                  </svg>
                </a>
                <button
                  onClick={() => {
                    Rox.showOverrides();
                  }}
                  type="button"
                  className="ml-4 px-3 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-700"
                >
                  DEV
                </button>
              </div>

              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                <button
                  type="button"
                  className="flex-shrink-0 p-1 text-blue-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`https://avatars.dicebear.com/api/open-peeps/${auth.user?.username}.svg`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block w-full text-left px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={signOut}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                  <div className="hidden lg:block lg:col-span-2">
                    <nav className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? "text-white" : "text-blue-100",
                            "text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="px-12 lg:px-0">
                    <div className="max-w-xs mx-auto w-full lg:max-w-md">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-white focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 flex-shrink-0 lg:hidden">
                <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-blue-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                    <div className="pt-3 pb-2">
                      <div className="flex items-center justify-between px-4">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                          >
                            <text y="32" fontSize="32">
                              🐝
                            </text>
                          </svg>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 pb-2">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`https://avatars.dicebear.com/api/open-peeps/${auth.user?.username}.svg`}
                            alt=""
                          />
                        </div>
                        <div className="ml-3 min-w-0 flex-1">
                          <div className="text-base font-medium text-gray-800 truncate">
                            {auth.user?.username}
                          </div>
                          <div className="text-sm font-medium text-gray-500 truncate">
                            {auth.user?.betaUser ? "Beta user" : "Regular user"}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}
                        <button
                          onClick={signOut}
                          className="block w-full text-left rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
};

export default AppNav;
