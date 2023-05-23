import React from 'react'
import Cards from "../Components/Users"
import {Container, ThisAre} from "./pageStyle"


export default function Works() {
  return (
    <div>
    <Container>
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
    </Container>
    </div>
  )

}