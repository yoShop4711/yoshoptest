import axios from "axios";
import {  useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./editproduct.css"

function EditProduct() {
  const { id } = useParams();
  const state = useContext(GlobalState);
  const[token] = state.token
  const [values, setValues] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productQuantity: "",
    productAvailability: "",
  });





  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]:value})


  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const updateProduct = async() => {

        const res = await axios.put(`/api/update_product/${id}`, {...values}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg)



    }

    updateProduct()
    
  }



  return <>
  <div className="login_page">
      <h2>Update Your Product</h2>
      <h3>Please write in all fields when updating</h3>
      
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product name">Product Name</label>
          <input
            type="text"
            placeholder="new product name"
            id="productName"
            name="productName"
            value={values.productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="product description">Product Description</label>
          <input
            type="text"
            placeholder="new product description"
            id="productDescription"
            name="productDescription"
            value={values.productDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="product price">Product Price</label>
          <input
            type="number"
            placeholder="new product price"
            id="productPrice"
            name="productPrice"
            value={values.productPrice}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="product quantity">Product Quantity</label>
          <input
            type="text"
            placeholder="new product quantity"
            id="productQuantity"
            name="productQuantity"
            value={values.productQuantity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="product availability">Product Availability</label>
          <input
            type="text"
            placeholder="new product availability"
            id="productAvailability"
            name="productAvailability"
            value={values.productAvailability}
            onChange={handleChange}
          />
        </div>




        <div className="row">
          <button type="submit">Update</button>
    
        </div>
      </form>

    </div>
  
  
  
  </>;
}

export default EditProduct;
