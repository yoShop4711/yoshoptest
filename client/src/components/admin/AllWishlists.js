import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import AllWishlist from "./AllWishlist"
import './products.css'

function AllWishlists() {
   const state = useContext(GlobalState)
   const[token] = state.token
  const[allWishlists, setAllWishlists] = useState([])


useEffect(() => {

    const getAllWishes = async() => {

        const res = await axios.get('/wish/all_customer_wishes', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setAllWishlists(res.data.wishes);

    }

    getAllWishes()

}, [token])


    return(<div className="products">

        {
            allWishlists.map((allWishlist, index) => {
                return(<AllWishlist key={index} allWishlist={allWishlist} />)
            })
        }


    
    </div>)
}

export default AllWishlists