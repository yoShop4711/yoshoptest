import { Link } from "react-router-dom"

function CancelCarts() {
    return(<div className="container">
        <h2 className="text-center">cancel orders if placed by mistake or if they are taking a long time.</h2>
        <table className="table">
            <thead>
            <th scope="col"><Link to="/cancel_not_processed_carts">Not Processed</Link>  </th>
            <th scope="col"><Link to="/cancel_my_processing_carts">Processing</Link></th>
            </thead>


        </table>
    
    </div>)
}

export default CancelCarts