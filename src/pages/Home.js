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
    <section className="py-20 bg-gray-200">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl text-center font-semibold text-[#000919]">Some Users</h2>

    <div id="latest-users" className="flex flex-wrap justify-center gap-6 my-6">
    {users && users.map(user => (
      <div key={user.id} className="w-96">
      <Card {...user} />
      </div>)
      )}
    </div>

    <Link className="w-48 block mx-auto text-center py-2 border border-[#000919] text-[#000919] font-semibold rounded hover:bg-[#000919] hover:text-white transition" to="/users">
      See more <i class="fa-solid fa-arrow-right"></i>
    </Link>
  </div>
</section>

    </>
  )
}

export default Home