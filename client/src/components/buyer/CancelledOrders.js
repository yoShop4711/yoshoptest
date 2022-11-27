import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import "./products.css"
import CancelledOrder from "./CancelledOrder"


function CancelledOrders() {
     
   const state = useContext(GlobalState)
   const[token] = state.token


   const [cancelledOrders, setCancelledOrders] = useState([]);

   useEffect(() => {
     const getCancelled = async () => {
       const res = await axios.get("/cart/show_user_cancelled_carts", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
 
    setCancelledOrders(res.data.orders);
     };
     getCancelled();
   }, [token]);
 

     
    return(<div className="products">
        

{cancelledOrders.map((order) => {
        return order.products.map((item, index) => {
          return (
            <CancelledOrder
              key={index}
              item={item}
              amount={order.amount}
              status={order.status}
              updated={order.updatedAt}
            />
          );
        });
      })}

    

    
    </div>)
}

export default CancelledOrders