import React from 'react'
import { AiOutlineLinkedin,AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";

/* AiOutlineInstagram */
export default function Home() {
  return (
    <div className='flex items-center flex-col'>
    <div className='mt-10 mb-10 ml-7 mr-64 bg-transparent text-7xl'>
      <h2 className='text-cyan-600 font-semibold'>Hi</h2>
      <h2 className='text-cyan-600 font-semibold'>I'm Santiago</h2>
      <h3 className='font-semibold'>Full-Stack Developer</h3>
    </div>
    <div className='w-6/12 flex items-center flex-row mr-64'>
      <ul className=' w-full flex flex-row flex-wrap justify-between items-center'>
    <li ><AiOutlineLinkedin className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/> </li>
    <li><AiOutlineGithub className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/></li>
    <li><AiOutlineYoutube className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/></li>
      </ul>
    </div>
    <div>
    <button></button>
    </div>
    </div>
  )

}
