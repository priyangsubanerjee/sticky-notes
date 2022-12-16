import React from "react";
import { Fade } from "react-reveal";

function Sidebar({ visible, close }) {
  return (
    <div>
      <Fade when={visible}>
        {visible && (
          <div className="fixed inset-0 h-full w-full bg-black/10 z-10"></div>
        )}
      </Fade>
      <Fade duration={500} left when={visible}>
        {visible && (
          <div
            onClick={() => close()}
            className="fixed inset-0 h-full w-full z-20 flex"
          >
            <div className="h-full bg-white w-[80%] shadow-xl">
              <ul className="pr-5 mt-10 text-sm space-y-2">
                <li className="py-3 px-5 bg-blue-50/0 text-stone-600 rounded-r-full">
                  All notes
                </li>
                <li className="py-3 px-5 bg-blue-50 text-blue-500 font-medium rounded-r-full">
                  Starred
                </li>
                <li className="py-3 px-5 bg-blue-50/0 text-stone-600 rounded-r-full">
                  Red
                </li>
                <li className="py-3 px-5 bg-blue-50/0 text-stone-600 rounded-r-full">
                  Blue
                </li>
                <li className="py-3 px-5 bg-blue-50/0 text-stone-600 rounded-r-full">
                  Starred
                </li>
              </ul>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Sidebar;
