import { useEffect, useState } from "react"
import MerchantOrder from "./MerchantOrder"



function CustomerOrder({product, resultOrders}) {

    const[items, setItems] = useState([])

     useEffect(() => {

        if(product._id) {

            resultOrders.map((resul) => {

                return resul.products.forEach((it) => {
                    if(it._id === product._id) setItems(resul)
                })



            })

        }

        

     }, [resultOrders, product._id])

    
    return(<div >


 <MerchantOrder  items={items} />

        
    </div>)
}
export default CustomerOrder