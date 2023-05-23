"use client";

import React from "react";
import Link from "next/link";
import { Portfolio, Maindiv } from "./pageStyle";

export default function Home() {
  return (
    <Maindiv
    initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ transition: { duration: 2 } }}>
      <Link href="/Homes">
        <Portfolio>English</Portfolio>
      </Link>
      <Link href="/HomeEsp">
         <Portfolio><p>Español</p></Portfolio> 
      </Link>
    </Maindiv>
  );
}
