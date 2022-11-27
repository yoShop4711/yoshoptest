import moment from "moment";
import "./cart.css";
import {  updateItem, removeItem } from "../../api/CartApi";

import { useEffect, useState } from "react";

function CartItems({
  product,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f, 
  run = undefined, 
  

  
}) {
  
  const [count, setCount] = useState(product.count);
  


  
  
  
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() =>{ removeItem(product._id);
            setRun(!run);
           } }
          className="badge-pill badge-danger mt-2 mb-2 p-2 px-3"
        >
          Remove Product
        </button>
      )
    );
  };

  useEffect(() => {


  }, [])

  const handleChange = (productId) => (event) => {
    setRun(!run);
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const picture = product.productImage.data.data;

  const base64String = window.btoa(
    new Uint8Array(picture).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  return (
    <div className="card">
      {/* {shouldRedirect(redirect)} */}

      <div className="card-body">
        <img
          src={`data:image/jpg;base64, ${base64String}`}
          className="mt-3"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={product.productName}
        />

        <div className="card-header name">
          
        <h3>  {product.productName} </h3>
          
          </div>

        <p className="lead">{product.productDescription.substring(0, 100)}</p>

        <div className="row ml-3">
          <p style={{ fontSize: "1rem" }} className="row">
            MK
            <div style={{ fontSize: "2rem" }}>{product.productPrice}</div>
          </p>
        </div>

        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>

        <br />

        

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
}

export default CartItems;
