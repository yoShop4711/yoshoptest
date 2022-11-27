import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import CancelledItems from "./CancelledItems";

function Cancelled() {
    const state = useContext(GlobalState)
    const[token] = state.token
    const[canceLled, setCancelled] = useState([])
    
    useEffect(() => {
        const getCancelled = async() => {
            const res = await axios.get("/cart/show_cancelled", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setCancelled(res.data.cancelled);

        }

        getCancelled()

    }, [token])


    

    return(<>
     {canceLled.map((cancel) => {
        return cancel.products.map((item, index) => {
          return (
            <CancelledItems
              key={index}
              item={item}
              amount={cancel.amount}
              status={cancel.status}
              user={cancel.user}
              updated={cancel.updatedAt}
            />
          );
        });
      })}



    
    
    
    </>)
}

export default Cancelled