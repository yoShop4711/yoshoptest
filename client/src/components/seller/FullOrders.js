import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import moment from "moment";
import { GlobalState } from "../../GlobalState";


function FullOrders({prods, items}) {
    const state =  useContext(GlobalState)
    const[products] = state.ProductsApi.products
    const[users] = state.UsersApi.users
    const[goods, setGoods] = useState([])
    const[buyer, setBuyer] = useState([])
    
    

    

    useEffect(() => {

        if(prods._id) {
            products.forEach((product) => {
                if(product._id === prods._id) setGoods(product)

            })

        }

    }, [prods._id, products])

    useEffect(() => {

        if(items.user) {
          users.forEach(use => {
            if(use._id === items.user) setBuyer(use)
          })
        }
    
      }, [items.user, users])
   


  
    if(goods.length === 0) return null

  
      const picture = goods.productImage.data.data
  
      const base64String =  window.btoa(
          new Uint8Array(picture)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        

      



    return(<div className="product_card">
<img  src={`data:image/jpg;base64, ${base64String}`} alt={goods.productName} />


<div className="product_box">
        <h2><Link to={`/buyer_profile/${items.user}`}>Buyer</Link>: <em> {buyer.fullname} </em></h2>
        <p>product: <em> {goods.productName} </em> </p>
        <p>price: <em>MK{items.amount}</em></p>
        <p >status: <em> {items.status} </em></p>
        <p>number of products: <em>{prods.count}</em> </p>
        <small>Last updated {moment(items.updatedAt).fromNow()}</small>

        </div>




    </div>)
}

export default FullOrders