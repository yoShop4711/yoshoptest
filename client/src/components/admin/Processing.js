import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import ProcessingItem from "./ProcessingItem";


function Processing() {

    const state = useContext(GlobalState)
    const[token] = state.token
    const[proceSsing, setProcessing] = useState([])

    useEffect(() => {

        const getProcessing = async () => {

            const res = await axios.get("/cart/show_processing", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setProcessing(res.data.processing);


        }

        getProcessing()


    }, [token])

    


    return(<>

{proceSsing.map((process) => {
        return process.products.map((item, index) => {
          return (
            <ProcessingItem
              key={index}
              item={item}
              amount={process.amount}
              status={process.status}
              user={process.user}
              updated={process.updatedAt}
            />
          );
        });
      })}


    
    
    </>)
}

export default Processing