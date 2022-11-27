import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import "./products.css"
import NotProcessed from "./NotProcessed"


function NotProcessedOrders() {
     
   const state = useContext(GlobalState)
   const[token] = state.token


   const [notProcessed, setNotProcessed] = useState([]);

   useEffect(() => {
     const getNotProcessed = async () => {
       const res = await axios.get("/cart/show_user_not_processed_carts", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
 
    setNotProcessed(res.data.orders);
     };
     getNotProcessed();
   }, [token]);
 

     
    return(<div className="products">

{notProcessed.map((order) => {
        return order.products.map((item, index) => {
          return (
            <NotProcessed
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

export default NotProcessedOrders