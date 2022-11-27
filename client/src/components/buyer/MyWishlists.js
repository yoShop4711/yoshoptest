import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import MyWishlist from "./MyWishList"
import './products.css'

function MyWishlists() {

   const state = useContext(GlobalState)
   const[token] = state.token
   const[wishlists, setWishlists] = useState([])

   useEffect(() => {
    const getWishLists = async() => {
        const res = await axios.get('/wish/user_wishlist', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })


        setWishlists(res.data.wishes);
    }

    getWishLists()

   }, [token])


   


    return(<div className="products">


        {

            wishlists.map((wishlist, index) => {
                return(
                    <MyWishlist key={index} wishlist={wishlist}  />
                )
            })

        }
    
    
    </div>)
}

export default MyWishlists