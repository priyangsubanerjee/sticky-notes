/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Sticky notes</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
    </div>
  );
}
