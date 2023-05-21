"use client";

import React from "react";
import Link from "next/link";
import { EnglishPortfolio } from "./pageStyle";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <Link href="/Homes">
        <EnglishPortfolio>English</EnglishPortfolio>
      </Link>
      <Link href="/">
         <EnglishPortfolio>Español (building)</EnglishPortfolio> 
      </Link>
    </div>
  );
}
