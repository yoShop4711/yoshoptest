import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import AllOrders from "./AllOrders"

function ShowOrders() {


  const state =  useContext(GlobalState)
  const[token] = state.token
  const[items, setItems] = useState([])

    useEffect(() => {
        const showOrders = async() => {

            const res = await axios.get("/cart/show_carts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        

            setItems(res.data.result);
            
        }

        showOrders()



    }, [token])

    

    return(<>

{
        items.map(item => {
            return(
                item.products.map((order, index) => {

                    return(
                        <AllOrders key={index} order={order} user={item.user}  />
                    )


                })
            )
        })
    }

    
    </>)
}

export default ShowOrders