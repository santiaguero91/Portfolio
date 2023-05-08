import React from 'react'
import Image from 'next/image';
import profilePic from '../img/foto.jpg';

export default function About() {
  return (

    <div className='flex flex-row w-3/4 m-auto'>
      <div className='m-auto'>
        <Image src={profilePic} alt='FOTO'
        width={500}
        height={500}
        className='rounded-full m-auto'
        />
      </div>
    
    <div className='flex flex-col mt-10 mx-11 text-xl '>
      <h3 className='my-3'>I’m Santiago Aguero, a Full-Stack Developer located in Buenos Aires managing a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</h3>
      <h3 className='my-3'>Well-organised person, problem solver, independent employee with attention to detail but also a teamplayer with high communication skills and leadership.</h3>
      <h3 className='my-3'>Interested in the entire programming spectrum and working on ambitious projects with positive people.</h3>
      <button className="mx-auto mt-10 w-fit p-10 bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"> Contact Me</button>
    </div>

    </div>
  )

}