/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="h-16 lg:h-20 flex items-center justify-between lg:justify-start px-5 lg:px-10 bg-white">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <img src="/logo.png" className="h-9" alt="" />
          <div className="flex items-center text-xl ml-3 space-x-1">
            <h1 className="font-semibold text-slate-800">Sticky</h1>
            <h1 className="text-slate-600">notes</h1>
          </div>
        </div>
        <ul className="hidden lg:flex items-center space-x-7 text-sm text-stone-600 ml-20">
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        <button className="px-4 h-10 border rounded-full hidden lg:flex items-center space-x-2 text-stone-700 text-sm ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Starred</span>
        </button>
        <button className="h-10 w-10 hidden lg:flex items-center justify-center border rounded-full ml-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Sidebar visible={sidebarOpen} close={() => setSidebarOpen(false)} />
    </div>
  );
}

export default Navbar;
