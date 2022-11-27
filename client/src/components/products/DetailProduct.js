import { useParams, Link } from "react-router-dom"
import {GlobalState} from "../../GlobalState"
import ProductItem from "./ProductItem"
import "./detailProduct.css"
import { useEffect, useState, useContext } from "react"


function  DetailProduct() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const [products] = state.ProductsApi.products
   const [detailProduct, setDetailProduct] = useState([])
   const[users, setUsers] = state.UsersApi.users
   const[single, setSingle] = useState([])

   useEffect(() => {

    if(detailProduct.createdBy) {

        users.forEach(user => {
            if(user._id === detailProduct.createdBy) setSingle(user)


        })


    }

}, [detailProduct.createdBy, users])




   

   useEffect(() => {

    if(id) {
        products.forEach(product => {
            if(product._id === id) setDetailProduct(product)
        })


    }


   }, [id, products])

   if(detailProduct.length === 0) return null;

   const picture = detailProduct.productImage.data.data

   

   const base64String =  window.btoa(
    new Uint8Array(picture)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );





    return(
    <>
    
    <div className="detail">

<img src={`data:image/jpg;base64, ${base64String}`}  alt={detailProduct.productName} />

<div className="box_detail">
    <div className="row">

        <h2>{detailProduct.productName}</h2>



    </div>

               <span> MK {detailProduct.productPrice}</span>
                    <p>{detailProduct.productDescription}</p>
                    <p>{detailProduct.productAvailability}</p>
                    <p>{detailProduct.productQuantity}</p>
                    <p>Seller: {single.fullname}</p>

                    <Link to="/cart" className="cart">
                        Buy Now
                    </Link>


</div>
    
    </div> 


    <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.categor === detailProduct.categor 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>

    
    
    
    
    </>)
}

export default DetailProduct