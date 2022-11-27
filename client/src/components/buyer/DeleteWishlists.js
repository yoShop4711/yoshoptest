import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import { Button } from "react-bootstrap"
import axios from "axios"

function DeleteWishlists() {
    const state =  useContext(GlobalState)
    const[token] = state.token
    const {id} = useParams()
   const navigate = useNavigate

    const deleteUser = async() => {
        const res = await axios.delete(`/wish/delete_wish/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)
        window.location.href = '/my_wishlist'
 
        

    }
    
    
    return(<div className="text-center centered">

    <p>press button to delete user</p>
    
    <Button onClick={deleteUser} className="btn btn-danger" >delete user</Button>
    
    
    </div>

    )
}

export default DeleteWishlists