import React from 'react'
import { AiOutlineLinkedin,AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link"
import About from "./About/page";
import {Divider} from "./pageStyle"

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
      <div className=' w-full flex flex-row flex-wrap justify-between items-center'>
    <Link href="https://www.linkedin.com/in/santiago-nicolas-agüero-urquiza-b693a41ba/" ><AiOutlineLinkedin className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/> </Link>
    <Link href="https://github.com/santiaguero91" ><AiOutlineGithub className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/></Link>
    <Link href="https://www.youtube.com/@SantiPrograma-mi7qd"><AiOutlineYoutube className='h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500'/></Link>
      </div>
    </div>
    <Divider/>
    <div>
      <About/>
    <Divider/>

    <button></button>
    </div>
    </div>
  )

}
