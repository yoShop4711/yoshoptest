import { Link } from "react-router-dom"


function BtnRender({order}) {
    

                
    return(<div className='row_btn'>
                    
                    <Link id="btn_view" to={`/change_order_status/${order._id}`}   >
                        view and cancel
                    </Link>

    
    </div>)


}

export default BtnRender
