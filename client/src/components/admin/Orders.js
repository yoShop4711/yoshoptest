import {Link} from "react-router-dom"

function Orders() {
    return(<div className="container">
        <h2 className="text-center">Orders Category</h2>
    <table className="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><Link to="/all_orders">All Orders</Link></th>
      <th scope="col"><Link to="/not_processed">Not Processed</Link>  </th>
      <th scope="col"><Link to="/processing">Processing</Link></th>
      <th scope="col"><Link to="/delivered">Delivered</Link></th>
      <th scope="col"><Link to="/cancelled">Cancelled</Link></th>
    </tr>
  </thead>


    </table>
    
    
    </div>)
}

export default Orders