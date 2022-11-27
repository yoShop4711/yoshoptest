import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { GlobalState } from "../../GlobalState"
import CustomerOrder from "./CustomerOrder"

function CustomerOrders({product}) {
      
      const state =  useContext(GlobalState)
      const [token] = state.token
      const[resultOrders, setResultOrders] = useState([])

      

      


      useEffect(() => {

        const allOrders = async() => {
    
            const res = await axios.get('/cart/show_carts', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
    
            setResultOrders(res.data.result);
    
        }
    
        allOrders()
    
    
       }, [token])

    
      
      

    return(<div>


        <CustomerOrder product={product} resultOrders={resultOrders} />

    
               
        
    </div>)
}

export default CustomerOrders