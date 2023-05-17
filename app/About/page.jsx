import React from 'react'
import Image from 'next/image';
import profilePic from '../img/foto.jpg';
import {Hi, Container, ContactMe} from "./pageStyle"

export default function About() {
  return (

<Container>
      <div className='margen'>
        <Image src={profilePic} alt='FOTO'
        width={500}
        height={500}
        className='photo'
        />
      </div>
    
    <Hi>
      <h3>I’m Santiago Aguero, a Full-Stack Developer located in Buenos Aires managing a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</h3>
      <h3>Well-organised person, problem solver, independent employee with attention to detail but also a teamplayer with high communication skills and leadership.</h3>
      <h3>Interested in the entire programming spectrum and working on ambitious projects with positive people.</h3>
      <ContactMe> Contact Me</ContactMe>
    </Hi>

    </Container>
  )

}