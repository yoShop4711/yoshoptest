import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import "./products.css"
import DeliveredOrder from "./DeliveredOrder"


function DeliveredOrders() {
     
   const state = useContext(GlobalState)
   const[token] = state.token


   const [deliveredOrders, setDeliveredOrders] = useState([]);

   useEffect(() => {
     const getDelivered = async () => {
       const res = await axios.get("/cart/show_user_delivered_carts", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
 
    setDeliveredOrders(res.data.orders);
     };
     getDelivered();
   }, [token]);
 

     
    return(<div className="products">
        

{deliveredOrders.map((order) => {
        return order.products.map((item, index) => {
          return (
            <DeliveredOrder
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

export default DeliveredOrders