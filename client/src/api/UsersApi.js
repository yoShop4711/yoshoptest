import { useEffect, useState } from "react"
import axios from "axios"


function UsersApi() {
    const[users, setUsers] = useState([])

    useEffect(() => {

        const showUsers = async() => {
            const res = await axios.get('/auth/show_users')

            setUsers(res.data.users)

        }

        showUsers()


    }, [])

    return{
        users: [users, setUsers]
    }


}

export default UsersApi