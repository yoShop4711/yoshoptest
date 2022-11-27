import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"


function ProcessingItem({item, amount, user, status, updated}) {

    const state = useContext(GlobalState)
    
    const[products] = state.ProductsApi.products
    const[users] = state.UsersApi.users
    const[prods, setProds] = useState([])
    const[buyer, setBuyer] = useState([])
    const[merchant, setMerchant] = useState([])

    useEffect(() => {



    if(item._id) {
        products.forEach(product => {

            if(product._id === item._id) setProds(product)


        })
    }





    }, [item._id, products])


    useEffect(() => {

      if(user) {
          users.forEach(person => {
            if(person._id === user)  setBuyer(person) 
          })
      }

    }, [user, users])

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



      
      if(buyer.length === 0) return null;

   
      if(prods.length === 0) 
      return <h2 style={{textAlign: "center", fontSize: "5rem"}}>No Orders</h2> 



    return(<div className="container">
    <div className="row row-cols-3">
<div className="col">

<div className="card">
<img className="card-img-top" src={`data:image/jpg;base64, ${base64String}`} alt={prods.productName} />
<div className="card-body">
<h2 className="card-title text-danger">Seller's name: <em> {merchant.fullname} </em></h2>
  <h2 className="card-title">Buyer's name: <em> {buyer.fullname} </em></h2>
  <h2>Product's name: <em> {prods.productName} </em> </h2>
  <h5 className="card-title">product price: <em>MK{amount}</em></h5>
  <h5 className="card-title">product status: <em> {status} </em></h5>
  <h5 className="card-title">number of products: <em>{item.count}</em> </h5>

</div>
<div className="card-footer">
  <small className="text-muted">Last updated {moment(updated).fromNow()}</small>
</div>
</div>

</div>



    </div>




</div>
)
}

export default ProcessingItem