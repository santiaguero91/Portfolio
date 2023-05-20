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
      >This are my Proyects so far ...</ThisAre>
      <Cards />
    </Container>
    </div>
  )

}