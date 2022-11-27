import { useContext } from "react";
import {GlobalState } from "../../GlobalState"
import axios from "axios"

function Checkout({products}) {
   const state =   useContext(GlobalState)
   const [token] = state.token

  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.productPrice;
    }, 0);
};


const amount =  getTotal(products)


const createOrder = async () => {

  const res = await axios.post("/cart/create_order", {products, amount}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  alert(res.data.msg)


}

  return(
    <div>
            <h2>Total: MK{getTotal()}</h2>
            <button onClick={createOrder}>create order</button>
          
        </div>
  )
}

export default Checkout