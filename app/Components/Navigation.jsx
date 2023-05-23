"use client";
import React from "react";
import Link from "next/link";
import { ItemLista } from "./NavigationStyle";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className="container flex flex-wrap items-center justify-end mx-auto font-serif">


{pathname !== "/" && (
        (pathname === "/Homes"  || pathname === "/About" || pathname === "/Works" || pathname === "/About") ? (
          <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0, delay: 0.8,  duration: 2  }}
              transition={{ delay: 1.2, transition: { duration: 2 } }}

            >
              <Link href="/">Lang</Link>
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.2, transition: { duration: 2 } }}
            >
              <Link href="/Homes">Home</Link>
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.6, transition: { duration: 2 } }}
            >
              <Link href="/About">About</Link>
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 2, transition: { duration: 2 } }}
            >
              <Link href="/Works">Works</Link>
            </ItemLista>
            <ItemLista
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.4, transition: { duration: 2 } }}
            >
              <Link href="/Contact">Contact</Link>
            </ItemLista>
          </ul>
        ) : <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
        <ItemLista
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, transition: { duration: 2 } }}
        >
          <Link href="/">Lang</Link>
        </ItemLista>
        <ItemLista
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.2, transition: { duration: 2 } }}
        >
          <Link href="/HomeEsp">Home</Link>
        </ItemLista>
        <ItemLista
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.6, transition: { duration: 2 } }}
        >
          <Link href="/AboutEsp">About</Link>
        </ItemLista>
        <ItemLista
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 2, transition: { duration: 2 } }}
        >
          <Link href="/WorksEsp">Works</Link>
        </ItemLista>
        <ItemLista
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.4, transition: { duration: 2 } }}
        >
          <Link href="/ContactEsp">Contact</Link>
        </ItemLista>
      </ul>
      )}

      {/* {(pathname === "/Homes"  || pathname === "/About" || pathname === "/Works" || pathname === "/About") ? (
        <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
          <ItemLista
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, transition: { duration: 2 } }}
          >
            <Link href="/">Lang</Link>
          </ItemLista>
          <ItemLista
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, transition: { duration: 2 } }}
          >
            <Link href="/Homes">Home</Link>
          </ItemLista>
          <ItemLista
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6, transition: { duration: 2 } }}
          >
            <Link href="/About">About</Link>
          </ItemLista>
          <ItemLista
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, transition: { duration: 2 } }}
          >
            <Link href="/Works">Works</Link>
          </ItemLista>
          <ItemLista
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.4, transition: { duration: 2 } }}
          >
            <Link href="/Contact">Contact</Link>
          </ItemLista>
        </ul>
      ) : ""} */}
    </div>
  );
}
