import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import CustomerOrders from "./CustomerOrders"

function CustomersOrders() {

   const state = useContext(GlobalState)
   const [token] = state.token
   const[products, setProducts] = useState([])
    
    
   useEffect(() => {
    const sellerProds = async() => {

        const res = await axios.get('/api/seller_products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setProducts(res.data.products);


    }
    sellerProds()

}, [token])




      
   


    return(<div>
        {
            products.map((product, index) => {
                return <CustomerOrders key={index} product={product} />
            })
        }
       
    </div>)
}

export default CustomersOrders