
import { useParams } from "react-router-dom"
import axios from "axios"
import { GlobalState } from "../../GlobalState"
import { Button } from "react-bootstrap"
import "./deleteproduct.css"
import { useContext } from "react"


function DeleteProduct() {
    const {id} = useParams()
    
    const state = useContext(GlobalState)

    
    const toke = state.token[0]

    const deleteProduct = async() => {
        
         const res = await axios.delete(`/api/delete_product/${id}`, {
            headers: {
                Authorization: `Bearer ${toke}`
            }
        })

        alert(res.data.msg); }



return(<div className="text-center centered">

<p>press button to delete product</p>

<Button onClick={deleteProduct} className="btn btn-danger" >delete product</Button>


</div>)

}

export default DeleteProduct