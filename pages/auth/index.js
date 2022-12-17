import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen w-screen lg:items-center lg:justify-center bg-slate-100">
      <div className="w-full h-full  bg-white">
        <div className="p-5">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <TextField
            id="outlined-basic"
            label="Enter your email"
            value={email.toLowerCase()}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
            variant="outlined"
            autoCapitalize="false"
            autoCorrect="false"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            fullWidth
            type={"password"}
          />
        </div>
        <div className="px-5">
          <button className="h-12 bg-blue-500 text-white text-center flex items-center justify-center w-full rounded font-medium transition-all">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
