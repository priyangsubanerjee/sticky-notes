/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="hidden grid-cols-3 place-content-center px-5 mt-5">
        <div></div>
        <div className="text-2xl flex items-center justify-center">Tasks</div>
        <div className="flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="border-b text-neutral-400 border-neutral-600 flex items-center px-5 space-x-8 overflow-auto scrollbar-hide pr-5">
        <button className="py-4 shrink-0 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="py-4 shrink-0 font-medium text-blue-300 border-b border-b-blue-300">
          To do
        </button>
        <button className="py-4 shrink-0 font-medium flex items-center space-x-2">
          <i class="bi bi-circle-fill text-[9px] text-red-300"></i>
          <span>Red</span>
        </button>
        <button className="py-4 shrink-0 font-medium flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>

          <span>New list</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
