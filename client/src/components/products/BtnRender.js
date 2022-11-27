import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {addItem,  itemTotal} from "../../api/CartApi"


function BtnRender({product}) {
    const navigate = useNavigate()
    const [redirect, setRedirect] = useState(false);

    const addToCart = () => {
        addItem(product, () => {

            setRedirect(true);
        })

    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return navigate('/cart');
        }
    };


   

                
                
    return(<div className='row_btn'>
                        {shouldRedirect(redirect)}

                        
                        <Link id="btn_buy" to="#!"   onClick={addToCart}>
                        Buy
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}   >
                        View
                    </Link>

    
    </div>)


}

export default BtnRender
