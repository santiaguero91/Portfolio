import React from 'react'
import axios from 'axios'
import Cards from "../Components/Users"
import {Container, ThisAre} from "./pageStyle"

const fetchUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data
}


export default async function Works() {
  const users = await fetchUsers()
  return (
    <Container>
      <ThisAre
      initial={{ opacity: 0 , y: 50}} 
      whileInView={{ opacity: 1 , y: 0, 
      transition:{duration:1}}}
      >This are my Proyects so far ...</ThisAre>
      <Cards />
    </Container>
  )

}