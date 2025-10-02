import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from "../components/Card";
import Slider from '../components/Slider';



function Home() {

    const [users, setUsers] = useState()

    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (response.status === 200) {
          setUsers(response.data.slice(0, 3));
        }
      })
      .catch(error => alert(error))
}, []);


  return (
    <>
    <Slider/>
    <section class="py-20 bg-gray-100">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl text-center font-semibold text-red-400">Latest Users</h2>

    <div id="latest-users" class="flex flex-wrap justify-center gap-6 my-6">
    {users && users.map(user => <Card key={user.id}{...user} />)}
    </div>

    <Link class="w-48 block mx-auto text-center py-2 border border-red-400 text-red-400 font-semibold rounded hover:bg-red-400 hover:text-white transition" to="/users">
      See more <i class="fa-solid fa-arrow-right"></i>
    </Link>
  </div>
</section>

    </>
  )
}

export default Home