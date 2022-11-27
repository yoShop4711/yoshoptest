import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import moment from "moment"




function Orders({order, amount, status, user, updated}) {
  


   const state = useContext(GlobalState)
   const[products] = state.ProductsApi.products
   const[users] = state.UsersApi.users
   const[singleOrders, setSingleOrders] = useState([])
   const[buyer, setBuyer] = useState([])
   const[merchant, setMerchant] = useState([])



   useEffect(() => {

    if(order._id) {

products.forEach(product => {
    if(product._id === order._id) setSingleOrders(product)
})

    }

   }, [order._id, products])


   useEffect(() => {

    if(user) {
        users.forEach(person => {
          if(person._id === user)  setBuyer(person) 
        })
    }

  }, [user, users])

  useEffect(() => {

    if(singleOrders.createdBy) {
      users.forEach(use => {
        if(use._id === singleOrders.createdBy) setMerchant(use)
      })
    }

  }, [singleOrders.createdBy, users])





  if(singleOrders.length === 0) return null

  
       const picture = singleOrders.productImage.data.data

   

   const base64String =  window.btoa(
    new Uint8Array(picture)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );





  if(buyer.length === 0) return null;

  if(singleOrders.length === 0) 
      return <h2 style={{textAlign: "center", fontSize: "5rem"}}>No Orders</h2> 



    return(<>


<div className="product_card">

<img  src={`data:image/jpg;base64, ${base64String}`} alt={singleOrders.productName} />


        <div className="product_box">
        <h2>Seller: <em> {merchant.fullname} </em></h2>
       <p>Buyer: <em> {buyer.fullname} </em></p>
       <p>Product: <em> {singleOrders.productName} </em> </p>
        <p>Price: <em>MK{amount}</em></p>
        <p >status: <em> {status} </em></p>
        <p>number of products: <em>{order.count}</em> </p>
        <p>Last updated {moment(updated).fromNow()}</p>







        </div>
    
    
    
    </div>


 {/* <div className="container">    
 <div className="row">
  <div className="col-md-6 col-lg-4">



 <div className="card  " style={{padding: "7px", margin: "7px", width: "18rem"}}>
 <img className="card-img-top" src={`data:image/jpg;base64, ${base64String}`} alt={singleOrders.productName} />
 <div className="card-body">
 <h2 className="card-title text-danger">Seller's name: <em> {merchant.fullname} </em></h2>
   <h2 className="card-title">Buyer's name: <em> {buyer.fullname} </em></h2>
  <h2>Product's name: <em> {singleOrders.productName} </em> </h2>
  <h5 className="card-title">product price: <em>MK{amount}</em></h5>
  <h5 className="card-title">product status: <em> {status} </em></h5>
   <h5 className="card-title">number of products: <em>{order.count}</em> </h5>

 </div>
 <div className="card-footer">
  <small className="text-muted">Last updated {moment(updated).fromNow()}</small>
</div>
 </div>

 </div>
 
</div>
</div> */}




 </>   

)
}

export default Orders