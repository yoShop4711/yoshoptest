import { useParams } from "react-router-dom"
import axios from "axios"
import { GlobalState } from "../../GlobalState"
import { Button } from "react-bootstrap"
import "./user.css"
import { useContext } from "react"

function DeleteUser() {
    const {id} = useParams()
    
    const state = useContext(GlobalState)
      
    
    const toke = state.token[0]

    const deleteUser = async() => {
        
         const res = await axios.delete(`/auth/delete_user/${id}`, {
            headers: {
                Authorization: `Bearer ${toke}`
            }
        })

        alert(res.data.msg); }



return(<div className="text-center centered">

<p>press button to delete user</p>

<Button onClick={deleteUser} className="btn btn-danger" >delete user</Button>


</div>)

}

export default DeleteUser