import  { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import axios from 'axios'
import "./filter.css"
import Table from "./Table"


function FilterUsers() {
    const[users, setUsers] = useState([])
    const[query, setQuery] = useState("")
    const state = useContext(GlobalState)
    const[isAdmin] = state.userApi.isAdmin

    const toke = state.token[0]


    useEffect(() => {
        const showUsers = async() => {
            if(isAdmin) {
    
                const res = await axios.get('/auth/show_users', {
                    headers: {
                        Authorization: `Bearer ${toke}`
                    }
                })
    
                setUsers(res.data.users); 
                        
                       }
        }
    
        showUsers()
    

    }, [toke, isAdmin])


    const handleChange = (event) => {
setQuery(event.target.value)

    }




    return(<div className="app">
    <input type="text" placeholder="search...." value={query} className="search" onChange={handleChange} />

    <Table users={users} query={query} />

    {/* <ul className="list">
        {users.filter((user) => user.username.includes(query)).map((user) => (
            <li className="listItem" key={user._id}>{user.username}</li>

        ))}

    </ul>
     */}
    </div>)
}

export default FilterUsers