import { Link } from "react-router-dom"

function BtnRender({product}) {
    return(<>

<div className='row_btn'>

 <Link id="btn_buy" to={`/delete_product/${product._id}`}>
Delete
 </Link> 
<Link id="btn_view" to={`/edit_product/${product._id}`}>
Edit
</Link>


</div>
    
    
    
    </>)
}

export default BtnRender