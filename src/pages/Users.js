import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from "../components/Card";

function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")


        useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (response.status === 200) {
            setUsers(response.data);
            const apiUsers = response.data;
        const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        setUsers([...localUsers, ...apiUsers]);
            }
        })
        .catch(error => alert(error))
    }, [])

    let filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    //for sorting
        filteredUsers = filteredUsers.sort((a,b) => 
            sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name))
    

    //toggle sort order
    const toggleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    }
    
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center mb-6 gap-4">
                    <div className="flex w-full sm:w-auto gap-2 items-center">
                        <input type="search" placeholder="Search by name or email" className="flex-1 min-w-[220px] sm:w-[300px] border border-[#3a4920] px-4 py-2 rounded" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button onClick={() => setSearch("")} className="underline whitespace-nowrap">Clear</button>
                    </div>
                    <button
                        onClick={toggleSort}
                        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200"
                    >
                        Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
                    </button>
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