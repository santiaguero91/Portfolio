'use client';

import React from 'react'
import Image from 'next/image';
import profilePic from '../img/foto.jpg';
import {Hi, Container, ContactMe} from "./pageStyle"
import { motion } from "framer-motion";





export default function About() {




  return (

<Container>
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
      transition={{delay: 0.2 , transition:{duration:2}}}>Soy Santiago Agüero, un desarrollador Full-Stack ubicado en Buenos Aires que maneja una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.</motion.h3>
      <motion.h3
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{delay: 0.8 , transition:{duration:2}}}>Soy una persona muy organizada, solucionador de problemas, empleado independiente con atención a los detalles pero también un jugador de equipo con altas habilidades de comunicación y liderazgo.</motion.h3>
      <motion.h3 
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{delay:1.4 , transition:{duration:2}}}>Interesado en todo el espectro de programación y trabajando en proyectos ambiciosos con personas positivas.</motion.h3>
      <ContactMe
      initial={{y: -50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 1.8 , transition:{duration:2}}}> Contactame</ContactMe>
    </Hi>
    </Container>
  )

}