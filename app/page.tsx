"use client";

import React from "react";
import Link from "next/link";
import { Portfolio, Maindiv } from "./pageStyle";

export default function Home() {
  return (
    <Maindiv>
      <Link href="/Homes">
        <Portfolio>English</Portfolio>
      </Link>
      <Link href="/HomeEsp">
         <Portfolio><p>Español</p></Portfolio> 
      </Link>
    </Maindiv>
  );
}
