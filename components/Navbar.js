/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="sticky inset-x-0 top-0 bg-white border-b">
      <div className="bg-white h-16 lg:h-20  flex items-center px-5 lg:px-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5838/5838024.png"
          alt=""
          className="h-10 lg:h-12"
        />
        <div className="flex items-center space-x-1 ml-3 lg:ml-4 text-lg">
          <h1 className="font-semibold lg:text-xl">Sticky</h1>
          <h1 className="text-stone-900 lg:text-xl">Notes</h1>
        </div>
        <div className="flex items-center space-x-4 ml-auto lg:hidden">
          <button className="h-16 w-16 text-stone-700 shadow-xl active:shadow-none active:translate-y-1 shadow-stone-200 rounded-full flex items-center justify-center fixed bottom-7 right-6 bg-white border transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button className="h-10 w-10 rounded-full bg-stone-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="h-10 w-10 rounded-full bg-stone-100 flex items-center justify-center"
          >
            {navOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex items-center ml-auto space-x-5">
          <Popover className="relative hover:shadow-xl transition-all rounded-full">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center border px-4 h-10 rounded-full outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class={`w-4 h-4 mr-2 ${
                      open && "rotate-180"
                    } transition-all duration-500`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <span className="text-sm">All notes</span>
                </Popover.Button>
                <Popover.Panel className="absolute top-12 left-1/2 transform -translate-x-1/2  border bg-white w-40 rounded">
                  <ul className="text-sm">
                    <li>
                      <Popover.Button className="px-4 py-3 border-b text-left w-full">
                        All notes
                      </Popover.Button>
                    </li>
                    <li>
                      <Popover.Button className="px-4 py-3 border-b text-left w-full">
                        Red
                      </Popover.Button>
                    </li>
                    <li className="px-4 py-3 border-b">
                      <Popover.Button>Blue</Popover.Button>
                    </li>
                    <li className="px-4 py-3 border-b">
                      <Popover.Button>Green</Popover.Button>
                    </li>
                    <li>
                      <Popover.Button className="px-4 py-3 w-full text-left">
                        Pink
                      </Popover.Button>
                    </li>
                  </ul>
                </Popover.Panel>
              </>
            )}
          </Popover>

          <button className="flex items-center justify-center border h-10 w-10 rounded-full hover:shadow-xl transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <button className="flex items-center justify-center border h-10 w-10 rounded-full hover:shadow-xl transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <button className="flex items-center justify-center border h-10 w-10 rounded-full hover:shadow-xl transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`h-0 ${
          navOpen && "h-48"
        } transition-all overflow-hidden px-5`}
      >
        <ul className="text-sm space-y-2 mt-2">
          <li>All notes</li>
          <li>Red</li>
          <li>Blue</li>
          <li>Green</li>
          <li>Pink</li>
        </ul>
        <div className="flex items-center justify-end">
          <div className="flex items-center border rounded-full px-4 py-2 bg-stone-50">
            <span className="text-sm mr-4">Account</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
