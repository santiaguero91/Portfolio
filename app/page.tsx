import React from 'react'
import { AiOutlineLinkedin,AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";

/* AiOutlineInstagram */
export default function Home() {
  return (
    <div className='flex items-center'>
    <div className='m-10 bg-transparent text-7xl'>
      <h2 className='text-cyan-600 font-semibold' data-aos-offset="200">Hi</h2>
      <h2 className='text-cyan-600 font-semibold'>I'm Santiago</h2>
      <h3 className='font-semibold'>Full-Stack Developer</h3>
    </div>
    <div>
      <ul>
    <li><AiOutlineLinkedin/> </li>
    <li><AiOutlineGithub/></li>
    <li><AiOutlineYoutube/></li>
      </ul>
    </div>
    <div>
    <button></button>
    </div>
    </div>
  )

}
