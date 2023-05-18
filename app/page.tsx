'use client';

import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import Link from "next/link";
import About from "./About/page";
import { Divider, FullStack, Hi } from "./pageStyle";
import { motion } from "framer-motion";

/* AiOutlineInstagram */
export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <div className="mt-10 mb-10 ml-7 mr-64 bg-transparent text-7xl">
        <Hi
          className="text-cyan-600 font-semibold"
          initial={{ x: -1000 }}
          animate={{ x: 0, transition: { duration: 0.9 } }}
        >
          Hi
        </Hi>
        <Hi
          className="text-cyan-600 font-semibold"
          initial={{ x: -1000 }}
          animate={{ x: 0, transition: { duration: 0.8, delay: 0.9 } }}
        >
          I'm Santiago
        </Hi>
        <FullStack className="font-semibold" 
        initial={{scaleY:0}}
        animate={{scaleY:1}}
        transition={{ delay: 1.8 , transition:{duration:0.5}}}
        >Full-Stack Developer</FullStack>
      </div>
      <div className="w-6/12 flex items-center flex-row mr-64">
        <div className=" w-full flex flex-row flex-wrap justify-between items-center">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { duration: 0.8, delay: 2 }}}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          <Link href="https://www.linkedin.com/in/santiago-nicolas-agüero-urquiza-b693a41ba/">
            <AiOutlineLinkedin className="h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500" />{" "}
          </Link></motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { duration: 0.8, delay: 2.2 }}}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          <Link href="https://github.com/santiaguero91">
            <AiOutlineGithub className="h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500" />
          </Link></motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { duration: 0.8, delay: 2.5 }}}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          <Link href="https://www.youtube.com/@SantiPrograma-mi7qd">
            <AiOutlineYoutube className="h-12 w-12 cursor-pointer transition duration-300 ease-out hover:text-gray-500" />
          </Link> </motion.div>
        </div>
      </div>
      <Divider />
      <div>
        <About />
        <Divider />

        <button></button>
      </div>
    </div>
  );
}
