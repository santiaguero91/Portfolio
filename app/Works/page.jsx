"use client";
import React from 'react'
import Cards from "../Components/Users"
import {Container, ThisAre} from "./pageStyle"
import { useAppSelector} from "../../Redux/hooks"


export default function Works() {
  const count = useAppSelector(state=>state.counterReducer.counter)
  return (
    <div>  {count === 1 ? 
    <Container>
      <ThisAre
      initial={{ opacity: 0 , y: 50}} 
      whileInView={{ opacity: 1 , y: 0, 
      transition:{duration:1}}}
      >This are my Proyects so far ...</ThisAre>
      <Cards />
      <ThisAre
      initial={{ opacity: 0 , y: 50}} 
      whileInView={{ opacity: 1 , y: 0, 
      transition:{duration:1}}}
      >Many more to come ...</ThisAre>
    </Container> : <Container>
      <ThisAre
      initial={{ opacity: 0 , y: 50}} 
      whileInView={{ opacity: 1 , y: 0, 
      transition:{duration:1}}}
      >Estos son mis proyectos hasta ahora ...</ThisAre>
      <Cards />
      <ThisAre
      initial={{ opacity: 0 , y: 50}} 
      whileInView={{ opacity: 1 , y: 0, 
      transition:{duration:1}}}
      >Muchos mas por venir ...</ThisAre>

      
    </Container>}
    </div>
  )

}