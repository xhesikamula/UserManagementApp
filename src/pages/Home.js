import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Home() {

    const [users, setUsers] = useState()

    useEffect(() => {
    let isMounted = true;
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (isMounted && response.status === 200) {
          setUsers(response.data.slice(0, 3));
        }
      })
      .catch(err => console.error(err));
    return () => { isMounted = false };
}, []);


  return (
    <div>Home</div>
  )
}

export default Home