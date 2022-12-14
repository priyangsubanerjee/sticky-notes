import React from "react";
import { Fade } from "react-reveal";

function Loader({ visible }) {
  return (
    <div>
      <Fade when={visible}>
        {visible && (
          <div className="flex items-center justify-center fixed inset-0 h-full w-full bg-black/50">
            <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white shadow">
              <div className="w-10 h-10 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Loader;
