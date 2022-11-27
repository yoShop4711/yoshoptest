import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"



function NotProcessedItem({item, amount, status, user, updated, notProcess}) {
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



      
      // if(buyer.length === 0) return null;

   
      // if(prods.length === 0) 
      // <return h2 style={{textAlign: "center", fontSize: "5rem"}}>No Orders</h2> 



    return(<div className="container">
    <div className="row row-cols-3">
<div className="col">

<div className="card">
<img className="card-img-top" src={`data:image/jpg;base64, ${base64String}`} alt={prods.productName} />
<div className="card-body">
<p className="card-title text-danger">seller: <em> {merchant.fullname} </em></p>
  <h2 className="card-title">buyer: <em> {buyer.fullname} </em></h2>
  <p>product: <em> {prods.productName} </em> </p>
  <p className="card-title">product: <em>MK{amount}</em></p>
  <p className="card-title">product: <em> {status} </em></p>
  <p className="card-title">quantity: <em>{item.count}</em> </p>

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

export default NotProcessedItem