import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getCart } from "../../api/CartApi"
import CartItems from "./CartItems";
import Checkout from "./Checkout";

function Cart() {

  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);


    useEffect(() => {
        setItems(getCart());
    }, [run]);

    
    const showItems = items => {
      return (
          <div>
              <h2>Your cart has {`${items.length}`} items</h2>
              <hr />
              {items.map((product, i) => (
                  <CartItems
                      key={i}
                      product={product}
                    
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}

                      
                    
                  
                  />
              ))}
          </div>
      );
  };

  const noItemsMessage = () => (
    <div>
    <h2>
        Your cart is empty. <br /> <Link to="/">Continue shopping</Link>
    </h2>
    </div>
);

    
  return (
    
    <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} />
                </div>


                </div>

    
  );
}

export default Cart;