
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import BtnRender from "./BtnRender"


function CancelNotProcessedOrder({item, amount, order}) {
    const state = useContext(GlobalState)
    const[products] = state.ProductsApi.products
   const[users] = state.UsersApi.users
   const[prods, setProds] = useState([])
   const[merchant, setMerchant] = useState([])


   

   useEffect(() => {



       if(item._id) {
           products.forEach(product => {
   
               if(product._id === item._id) setProds(product)
   
   
           })
       }
   
   }, [item._id, products])

   useEffect(() => {

       if(prods.createdBy) {
         users.forEach(use => {
           if(use._id === prods.createdBy) setMerchant(use)
         })
       }
   
     }, [prods.createdBy, users])
   
 
 
     if(prods.length === 0) return null;
 
 
     const picture = prods.productImage.data.data
 
     const base64String =  window.btoa(
         new Uint8Array(picture)
           .reduce((data, byte) => data + String.fromCharCode(byte), '')
       );
 
   


    return(
        <div className="product_card">

<img  src={`data:image/jpg;base64, ${base64String}`} alt={prods.productName} />


        <div className="product_box">
        <h2>Seller: <em> {merchant.fullname} </em></h2>
        <h3>Product: <em> {prods.productName} </em> </h3>
        <h5>Price: <em>MK{amount}</em></h5>
    

        </div>
    <BtnRender order={order} />
    
    
    </div>


    )
}

export default CancelNotProcessedOrder