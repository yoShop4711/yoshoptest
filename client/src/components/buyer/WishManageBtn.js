import { Link } from "react-router-dom"


function WishManageBtn({wishlist}) {
    

                
    return(<div className='row_btn'>
                    
                    <Link id="btn_view" to={`/update_wishlist/${wishlist._id}`}   >
                        Update
                    </Link>
                    <Link id="btn_view" to={`/delete_wishlist/${wishlist._id}`}   >
                        Delete
                    </Link>


    
    </div>)


}

export default WishManageBtn
