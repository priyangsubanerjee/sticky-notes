/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";
import { loginWithCredentials } from "../../helper/account";
import { encrypt } from "../../helper/crypto";

function Auth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const submitForm = async () => {
    setLoading(true);
    const { success, message, data } = await loginWithCredentials(
      account.email,
      account.password
    );
    if (success) {
      setLoading(false);
      toast.success(message);
      const encrypted = encrypt(JSON.stringify(data));
      localStorage.setItem("account", JSON.stringify(encrypted));
      router.push("/");
    } else {
      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className="h-screen w-screen overflow-auto flex items-center justify-center">
      <div className="h-full w-full lg:h-fit lg:w-[550px] lg:border bg-white pb-5">
        <div className="p-5">
          <h1 className="text-sm text-stone-600">Welcome to,</h1>
          <div className="flex items-center mt-3">
            <img
              className="h-9 lg:h-12"
              src="https://cdn-icons-png.flaticon.com/512/5838/5838024.png"
              alt=""
            />
            <h1 className="space-x-1 text-neutral-800 ml-3 font-poppins">
              <span className="text-lg lg:text-2xl font-semibold">Sticky</span>
              <span className="text-lg lg:text-2xl">Notes</span>
            </h1>
          </div>
          <p className="text-xs text-stone-600 leading-6 mt-5">
            See your notes anywhere. Paper sticky notes are great until you put
            one in a place you swear you&apos;ll remember and promptly forget
            it. Keep things organized.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            className="mt-10 lg:px-5"
          >
            <div>
              <label className="text-sm text-stone-500 font-medium" htmlFor="">
                Email
              </label>
              <input
                type="text"
                placeholder="abc@example.com"
                autoCapitalize="off"
                autoCorrect="false"
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
                className="outline-none w-full py-3 border-b px-4 mt-2 font-normal font-poppins lg:text-sm rounded-none"
                name=""
                id=""
              />
            </div>
            <div className="mt-7">
              <label className="text-sm text-stone-500 font-medium" htmlFor="">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={account.password}
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
                className="outline-none w-full py-3 border-b px-4 mt-2 font-poppins lg:text-sm rounded-none"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center justify-end mt-4 text-sm">
              <button className="text-stone-700">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="p-3 bg-stone-800 hover:bg-stone-900 active:bg-black rounded-md mt-10 text-white w-full transition-all"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center mt-7 text-sm">
            <Link href={"/auth/signup"}>
              <button className="text-stone-700">Create new account</button>
            </Link>
          </div>
        </div>
      </div>
      <Loader visible={loading} />
    </div>
  );
}

export default Auth;
