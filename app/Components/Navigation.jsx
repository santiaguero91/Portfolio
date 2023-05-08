import React from 'react'
import Link from "next/link"

export default function Navigation() {
  return (
    <div className="container flex flex-wrap items-center justify-end mx-auto">
      <ul className="flex flex-col items-end pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold ">
        <li className="text-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg">
          <Link href="/About">About</Link>
        </li>
        <li className="text-lg">
          <Link href="/Works">Works</Link>
        </li>
        <li className="text-lg">
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )

}