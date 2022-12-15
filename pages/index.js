/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { decrypt } from "../helper/crypto";
import React, { useState, useEffect } from "react";
import { checkIfLoggedIn } from "../helper/account";
import Navbar from "../components/Navbar";
import UserLoggedIn from "../components/UserLoggedIn";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (checkIfLoggedIn() == false) {
      router.push("/auth/");
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Sticky notes</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <UserLoggedIn>
        <Navbar />
      </UserLoggedIn>
    </div>
  );
}
