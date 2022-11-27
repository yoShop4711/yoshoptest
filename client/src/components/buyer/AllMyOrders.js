import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import "./products.css"
import MyOrders from "./MyOrders"


function AllMyOrders() {
     
   const state = useContext(GlobalState)
   const[token] = state.token


   const [allOrders, setAllOrders] = useState([]);

   useEffect(() => {
     const getAllMyOrders = async () => {
       const res = await axios.get("/cart/show_user_carts", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
 
    setAllOrders(res.data.orders);
     };
     getAllMyOrders();
   }, [token]);
 

     
    return(<div className="products">

{allOrders.map((order) => {
        return order.products.map((item, index) => {
          return (
            <MyOrders
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

export default AllMyOrders