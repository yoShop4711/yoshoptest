import axios from "axios"
import { useState, useContext } from "react"
import {GlobalState} from "../../GlobalState"
import "./createproduct.css"

function CreateProduct() {
    const state = useContext(GlobalState)


    
    const [product, setProduct] = useState({
        productName: "",
        productDescription: "",
        productQuantity: "",
        productAvailability: "",
        productImage: false,
        categor: "",
        productPrice: ""
    
    })
    
    const[categories] = state.CategoriesApi.categories   
    const [isSeller] = state.userApi.isSeller
    const [token] = state.token


    const handleChangeInput = (event )=>{ 
        if(event.target.name === "productImage") {
            setProduct({[event.target.name]: event.target.files[0]})

        } else{
        const {name, value} = event.target
        setProduct({...product, [name]:value}) }
    }

    
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        

        if(!isSeller) return alert("you are not a seller")


        
        let formData = new FormData()
    
        formData.append('productName', product.productName)
        formData.append('productDescription', product.productDescription)
        formData.append('productQuantity', product.productQuantity)
        formData.append('productAvailability', product.productAvailability)
        formData.append('productImage', product.productImage)
        formData.append('categor', product.categor) 
        formData.append('productPrice', product.productPrice)

    


           const res = await axios.post('/api/create_product',   formData , {
            headers: { Authorization: `Bearer ${token}`}
        })

        alert(res.data.msg)
       
    }

    return( <>
            <div className="create_product">
            
              <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
            <div>
                <input type="file" name="productImage"  onChange={handleChangeInput}    />
                
              </div>
              </div>

                <div className="row">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" value={product.productName} onChange={handleChangeInput} id="productName" required />
                </div>

                
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="productPrice" id="productPrice" value={product.productPrice} onChange={handleChangeInput}  required />
                </div>

                <div className="row">
                    <label htmlFor="description">Product Description</label>
                    <textarea type="text" name="productDescription" value={product.productDescription} onChange={handleChangeInput} id="productionDescription" required
                 rows="5"  />
                </div>

                <div className="row">
                    <label htmlFor="productQuantity">Product Quantity</label>
                    <input type="text" name="productQuantity" value={product.productQuantity} onChange={handleChangeInput} id="productQuantity" required   />
                </div>

                <div className="row">
                    <label htmlFor="productAvailability">Product Availability</label>
                    <input type="text" name="productAvailability" value={product.productAvailability} onChange={handleChangeInput} id="productAvailability" required   />
                </div>


                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="categor"  value={product.categor} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Create</button>
            </form>
        </div>




             
</> )

}

export default CreateProduct