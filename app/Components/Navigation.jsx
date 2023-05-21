"use client";
import React from 'react'
import Link from "next/link"
import { ItemLista } from "./NavigationStyle";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className="container flex flex-wrap items-center justify-end mx-auto font-serif">
      
      {pathname !== "/" &&
    <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
    <ItemLista
    initial={{y: -50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{delay: 0.8 , transition:{duration:2}}}
    >
      <Link href="/">Home</Link>
    </ItemLista>
    <ItemLista 
    initial={{y: -50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{ delay: 1.2 , transition:{duration:2}}}>
      <Link href="/About">About</Link>
    </ItemLista>
    <ItemLista 
    initial={{y: -50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{ delay: 1.6 , transition:{duration:2}}}>
      <Link href="/Works">Works</Link>
    </ItemLista>
    <ItemLista
    initial={{y: -50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{ delay: 2 , transition:{duration:2}}}>
      <Link href="/Contact">Contact</Link>
    </ItemLista>
  </ul>


    }
      
      
    </div>
  )

}