'use client';

import React from 'react'
import Image from 'next/image';
import profilePic from '../img/foto.jpg';
import {Hi, Container, ContactMe, DivParticles} from "./pageStyle"
import { motion } from "framer-motion";
import ParticlesBackground from '../Homes/particlesBackground';





export default function About() {




  return (

<Container>
<DivParticles>
<ParticlesBackground 
        />
        </DivParticles>


      <motion.div className='margen'
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{transition:{duration:2}}}>
        <Image src={profilePic} alt='FOTO'
        width={500}
        height={500}
        className='photo'
        />
      </motion.div>
    
    <Hi>
      <motion.h3
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{delay: 0.2 , transition:{duration:2}}}>I&apos;m Santiago Aguero, a Full-Stack Developer located in Buenos Aires managing a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</motion.h3>
      <motion.h3
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{delay: 0.8 , transition:{duration:2}}}>Well-organised person, problem solver, independent employee with attention to detail but also a teamplayer with high communication skills and leadership.</motion.h3>
      <motion.h3 
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{delay:1.4 , transition:{duration:2}}}>Interested in the entire programming spectrum and working on ambitious projects with positive people.</motion.h3>
      <ContactMe
      initial={{y: -50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 1.8 , transition:{duration:2}}}> Contact Me</ContactMe>
    </Hi>
    </Container>
  )

}