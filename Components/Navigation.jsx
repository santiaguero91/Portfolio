import React from 'react'
import Link from "next/link"

export default function Navigation() {
  return (
    <div>
      <h1>NavBar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Works">Works</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )

}