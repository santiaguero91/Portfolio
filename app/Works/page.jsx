import React from 'react'
import axios from 'axios'

const fetchUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data
}


export default async function Works() {
  const users = await fetchUsers()
  return (
    <div>
      {users.map((user)=>(
          <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
            <h5>{user.email}</h5>
            <h5>{user.first_name}</h5>
            <img src={user.avatar} />
          </div>
      ))}
    </div>
  )

}