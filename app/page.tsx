"use client";

import React from "react";
import Link from "next/link";
import { EnglishPortfolio, Maindiv } from "./pageStyle";

export default function Home() {
  return (
    <Maindiv>
      <Link href="/Homes">
        <EnglishPortfolio>English</EnglishPortfolio>
      </Link>
      <Link href="/">
         <EnglishPortfolio>Español (building)</EnglishPortfolio> 
      </Link>
    </Maindiv>
  );
}
