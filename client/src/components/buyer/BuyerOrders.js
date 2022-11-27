import { Link } from "react-router-dom"

function BuyerOrders() {
    return(<div className="container">
    <h2 className="text-center">My orders</h2>
    <table className="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><Link to="/show_all_my_orders">All Orders</Link></th>
      <th scope="col"><Link to="/show_not_processed_carts">Not Processed</Link>  </th>
      <th scope="col"><Link to="/show_my_processing_carts">Processing</Link></th>
      <th scope="col"><Link to="/show_my_delivered_carts">Delivered</Link></th>
      <th scope="col"><Link to="/show_my_cancelled_carts">Cancelled</Link></th>
      <th scope="col"><Link to="/cancel_carts">Cancel Orders</Link></th>
    </tr>
  </thead>

</table>

    
    </div>)
}

export default BuyerOrders