/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";
import { checkIfLoggedIn, createAccount } from "../../helper/account";
import { encrypt } from "../../helper/crypto";

function Signup() {
  const router = useRouter();
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    setLoading(true);
    const { success, message, data } = await createAccount(
      account.name,
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

  useLayoutEffect(() => {
    if (checkIfLoggedIn() == true) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="h-screen w-screen overflow-auto flex items-center justify-center">
      <div className="h-full w-full lg:h-fit lg:w-[550px] lg:border bg-white pb-5">
        <div className="p-5">
          <div className="flex items-center mt-3">
            <img
              className="h-9 lg:h-12"
              src="https://cdn-icons-png.flaticon.com/512/5838/5838024.png"
              alt=""
            />
            <h1 className="space-x-1 text-neutral-800 ml-3 font-poppins">
              <span className="text-lg lg:text-2xl font-semibold">Signup</span>
            </h1>
          </div>
          <p className="text-xs text-stone-600 leading-6 mt-5">
            We are happy to have you here. Please fill in the form below to
            create your account.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            className="mt-7 lg:px-5"
          >
            <div>
              <label className="text-sm text-stone-500 font-medium" htmlFor="">
                Name
              </label>
              <input
                type="text"
                required
                value={account.name}
                onChange={(e) =>
                  setAccount({ ...account, name: e.target.value })
                }
                placeholder="John Doe"
                className="outline-none w-full py-3 border-b focus:border-b-black px-4 mt-2 font-poppins lg:text-sm transition-all"
                name=""
                id=""
              />
            </div>
            <div className="mt-5">
              <label className="text-sm text-stone-500 font-medium" htmlFor="">
                Email
              </label>
              <input
                type="email"
                required
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
                placeholder="abc@example.com"
                className="outline-none w-full py-3 border-b focus:border-b-black px-4 mt-2 font-poppins lg:text-sm transition-all"
                name=""
                id=""
              />
            </div>
            <div className="mt-5">
              <label className="text-sm text-stone-500 font-medium" htmlFor="">
                Password
              </label>
              <input
                type="password"
                required
                value={account.password}
                onChange={(e) =>
                  setAccount({
                    ...account,
                    password: e.target.value,
                  })
                }
                placeholder="********"
                className="outline-none w-full py-3 border-b focus:border-b-black px-4 mt-2 font-poppins lg:text-sm transition-all"
                name=""
                id=""
              />
            </div>
            <button className="p-3 bg-stone-800 hover:bg-stone-900 active:bg-black rounded-md mt-10 text-white w-full transition-all">
              Login
            </button>
          </form>

          <div className="flex items-center justify-center mt-7 text-sm">
            <Link href={"/auth/"}>
              <button className="text-stone-700">Back to login</button>
            </Link>
          </div>
        </div>
      </div>
      <Loader visible={loading} />
    </div>
  );
}

export default Signup;
