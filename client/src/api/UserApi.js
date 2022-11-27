import { useEffect, useState } from "react"
import axios from "axios"

function UserApi(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [isAdmin, setIsadmin] = useState(false)
    const[isBuyer, setIsbuyer] = useState(false)
    const [owner, setOwner] = useState('')
    


    useEffect(() => {

        if(token) {
            const getUser = async() => {
            try{
                const res = await axios.get('/auth/user', {
                    headers: {Authorization: `Bearer ${token}`}
                })
                setIsLogged(true)
            res.data.role === 1 ? setIsSeller(true) : setIsSeller(false) 
            res.data.admin === 1 ? setIsadmin(true) : setIsadmin(false)
            res.data.role === 0 ? setIsbuyer(true) : setIsbuyer(false)
            setOwner(res.data.username)
            
        

        
        }

            catch(err) {
                console.log(err);
            }
            }


            getUser()

            

        }


    }, [token, owner])


    
    return{

isLogged: [isLogged, setIsLogged],
isSeller: [isSeller, setIsSeller],
owner: [owner, setOwner],
isAdmin: [isAdmin, setIsadmin],
isBuyer: [isBuyer, setIsbuyer],

    
    
    
    }
}

export default UserApi