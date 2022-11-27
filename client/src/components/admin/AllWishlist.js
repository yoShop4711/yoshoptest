import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";


function AllWishlist({allWishlist}) {

     const state = useContext(GlobalState)
     const[users] = state.UsersApi.users
     const[wishCreator, setWishCreator] = useState([])

    

     useEffect(() => {
        if(allWishlist.createdBy) {
            users.forEach(person => {
                if(person._id === allWishlist.createdBy)  setWishCreator(person) 
              })

        }


     }, [users, allWishlist.createdBy])

     
     



    if(allWishlist.length === 0 ) return null

    const picture = allWishlist.productImage.data.data
  
      const base64String =  window.btoa(
          new Uint8Array(picture)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
  

    return(<div className="product_card">
        <img  src={`data:image/jpg;base64, ${base64String}`} alt={allWishlist.productName} />

        <div className="product_box">
        <h2 className="text-danger">wish by: <em> {wishCreator.fullname} </em></h2>
        <h3> <em> {allWishlist.productName} </em> </h3>
        <p><em> {allWishlist.productDescription} </em> </p>


        <small>Last updated {moment(allWishlist.createdAt).fromNow()}</small>


        </div>

    
    
    </div>)
}

export default AllWishlist