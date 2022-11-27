import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import "./products.css"
import ProcessingOrder from "./ProcessingOrder"


function ProcessingOrders() {
     
   const state = useContext(GlobalState)
   const[token] = state.token


   const [processingOrders, setProcessingOrder] = useState([]);

   useEffect(() => {
     const getProcessing = async () => {
       const res = await axios.get("/cart/show_user_processing_carts", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
 
    setProcessingOrder(res.data.orders);
     };
     getProcessing();
   }, [token]);
 

     
    return(<div className="products">
        

{processingOrders.map((order) => {
        return order.products.map((item, index) => {
          return (
            <ProcessingOrder
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

export default ProcessingOrders