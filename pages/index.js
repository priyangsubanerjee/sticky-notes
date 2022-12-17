/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
    </div>
  );
}
