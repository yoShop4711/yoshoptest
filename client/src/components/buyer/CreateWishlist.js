import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import './wishlist.css'

function CreateWishlist() {
   const state = useContext(GlobalState)
   const[wishlist, setWishlist]   =   useState({
                    productName: "",
                    productDescription: "",
                    productImage: false
                  })

    const [isBuyer] = state.userApi.isBuyer   
    const [token] = state.token

    const handleChangeInput = (event )=>{ 
        if(event.target.name === "productImage") {
            setWishlist({[event.target.name]: event.target.files[0]})

        } else{
        const {name, value} = event.target
        setWishlist({...wishlist, [name]:value}) }
    }


    const handleSubmit = async(event) => {
        event.preventDefault()

        if(!isBuyer) return alert("you are not a seller")

        let formData = new FormData()
    
        formData.append('productName', wishlist.productName)
        formData.append('productDescription', wishlist.productDescription)
        formData.append('productImage', wishlist.productImage)


        const res = await axios.post('/wish/create_wishlist', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        })

        alert(res.data.msg);

    }

       


    return(<div className='create_product'>
        <h1 className='text-center'>create your wishlist</h1>
         <form onSubmit={handleSubmit} encType="multipart/form-data">
         <div className="row">
            <div>
                <input type="file" name="productImage"   onChange={handleChangeInput}    />
                
              </div>
              </div>

              <div className="row">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" value={wishlist.productName} onChange={handleChangeInput} id="productName" required />
                </div>

                <div className="row">
                    <label htmlFor="description">Product Description</label>
                    <textarea type="text" name="productDescription" value={wishlist.productDescription} onChange={handleChangeInput} id="productionDescription" required
                 rows="5"  />
                </div>

                <button type="submit">Create</button>

         </form>
    
    </div>)
}

export default CreateWishlist