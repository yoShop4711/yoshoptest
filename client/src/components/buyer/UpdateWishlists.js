import axios from "axios"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import "./wishlists.css"

function UpdateWishlists() {
   const state = useContext(GlobalState)
   const [token] = state.token
  const[values, setValues] =  useState({ productName: "", productDescription: ""})

     const {id} = useParams()


     const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({...values, [name]:value})
    
    
    
      }
    

     

        const updateWish = async() => {

            const res = await axios.put(`/wish/update_wish/${id}`, {...values}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })

            alert(res.data.msg)

        }


    
   
    return(<div className="profile_page edit_user">
            

    <div className="col-left">
        <h2> update wishlist</h2>
        <div className="form-group">
            <label htmlFor="role">product name</label>
            <input type="text" name="productName" value={values.productName} onChange={handleChange}  />
        </div>
        <div className="form-group">
            <label htmlFor="role">product description</label>
            <input type="text" name="productDescription" value={values.productDescription} onChange={handleChange}  />
        </div>


        <button onClick={updateWish}>update</button>
    </div>
</div>
)
}

export default UpdateWishlists