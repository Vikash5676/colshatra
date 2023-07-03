import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full bg-sky-700 text-white">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        <div className="flex w-[60%]  items-center justify-between">
          <div className="block md:flex items-center w-full justify-between relative">
            <div className="absolute top-[2%] left-2">
              <svg
                xmlns="<http://www.w3.org/2000/svg>"
                id="menu-button"
                class="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <Link to={"#"} className="flex items-center ml-10">
              <span>
                <img src="" alt="Logo" />
              </span>
              <span>My App</span>
            </Link>
            {/* Desktop Navigation */}
            <div
              className={`${
                toggle ? "block" : "hidden"
              } w-full md:flex md:items-center md:w-auto `}
            >
              <ul
                class="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0 ml-10 "
              >
                <li>
                  <Link
                    class="px-5 block hover:text-blue-500 hover:bg-white text-white"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    class="px-5 block hover:text-blue-500 hover:bg-white text-white"
                    to={"/my-listing"}
                  >
                    MyListing
                  </Link>
                </li>
                <li>
                  <Link
                    class="px-5 block hover:text-blue-500 hover:bg-white text-white"
                    to={"/markets"}
                  >
                    Markets
                  </Link>
                </li>
                <li>
                  <Link
                    class="px-5 block hover:text-blue-500 hover:bg-white text-white"
                    to={"/indbox"}
                  >
                    Indbox
                  </Link>
                </li>
                <li>
                  <Link
                    class="px-5 block hover:text-blue-500 hover:bg-white text-white"
                    to={"/brandStores"}
                  >
                    BrandStores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>

        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
