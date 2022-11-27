import axios from "axios";
import {  useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./createproduct.css"


function ChangeOrderStatus() {
    const { id } = useParams();
  const state = useContext(GlobalState);
  const[token] = state.token
  const[status, setStatus] = useState("")
  const[enam, setEnam] = useState([])

  console.log(id);


  useEffect(() => {

    const getEnam = async () => {
      const res = await axios.get('/cart/show_status', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setEnam(res.data);

    }

    getEnam()


  }, [token])

  const handleChangeInput = (event) => {

    setStatus(event.target.value)

  }

  

    const updateOrder = async() => {
        const res = await axios.put(`/cart/update_status/${id}`, {status}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(res);

    }



  
    
    return(
      <div>
      <select name="status" value={status} onChange={handleChangeInput}>
        <option value="">
          select a category

        </option>
        <option>{enam[3]}</option>

      </select>

<button type="submit" onClick={updateOrder}>submit</button>


    </div>



      
    )
}

export default ChangeOrderStatus