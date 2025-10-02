import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from "../components/Card";

function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

        useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (response.status === 200) {
            setUsers(response.data);
            }
        })
        .catch(error => alert(error))
    }, [])

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-[500px]">
                        <input type="search" placeholder="Search by name or email" className="w-[400px] border border-gray-300 px-6 py-2 mr-3" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button onClick={() => setSearch("")} reloadDocument className="underline">Clear</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => <Card key={user.id}{...user} />)
                    ): (
                        <p className="text-gray-500">No users found</p>
                    )}
                </div>
            </div>
    </section>
    )
}

export default Users