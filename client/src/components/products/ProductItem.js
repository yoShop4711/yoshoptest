import { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import BtnRender from "./BtnRender"



function ProductItem({product}) {
const state = useContext(GlobalState)
const[users] = state.UsersApi.users
const[single, setSingle] = useState([])



useEffect(() => {

    if(product.createdBy) {

        users.forEach(user => {
            if(user._id === product.createdBy) setSingle(user)


        })


    }

}, [product.createdBy, users])


 
const picture = product.productImage.data.data

const base64String =  window.btoa(
    new Uint8Array(picture)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );


    return(<div className="product_card">
        


        <img src={`data:image/jpg;base64, ${base64String}`}  alt={product.productName} />


        <div className="product_box">
            <h2>{product.productName}</h2>
            <span>MK{product.productPrice}</span>
            <p>{product.productDescription}</p>
            <p>Seller: {single.fullname}</p>


        </div>

        <BtnRender product={product} />
    
    </div>)
}

export default ProductItem
