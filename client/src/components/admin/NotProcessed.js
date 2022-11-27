import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import NotProcessedItem from "./NotProcessedItem";


function NotProcessed() {
    const state = useContext(GlobalState)
    const[token] = state.token
    const[notProceSsed, setNotProcessed] = useState([])

    useEffect(() => {

        const getNotProcessed = async() => {

            const res = await axios.get("/cart/show_not_processed", {
                headers: {
                    Authorization: `Bearer ${token}`

                }
            })

            setNotProcessed(res.data.not_processed);

        }

        getNotProcessed()

    }, [token])




    return(<>
    {notProceSsed.map((notProcess) => {
        return notProcess.products.map((item, index) => {
          return (
            <NotProcessedItem
              key={index}
              item={item}
              amount={notProcess.amount}
              status={notProcess.status}
              user={notProcess.user}
              updated={notProcess.updatedAt}
              notProcess={notProcess}
            />
          );
        });
      })}



    
    
    </>)
}

export default NotProcessed