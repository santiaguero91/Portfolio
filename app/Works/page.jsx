import React from 'react'
import axios from 'axios'
import Cards from "../Components/Users"

const fetchUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data
}


export default async function Works() {
  const users = await fetchUsers()
  return (
    <div>
      <Cards />
    </div>
  )

}