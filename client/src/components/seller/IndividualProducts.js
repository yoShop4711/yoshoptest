import BtnRender from "./BtnRender";
import "./individual.css"


function IndividualProducts({product}) {


    const picture = product.productImage.data.data

   

    const base64String =  window.btoa(
     new Uint8Array(picture)
       .reduce((data, byte) => data + String.fromCharCode(byte), '')
   );
 


    return(<>

<div className="product_card">
        


        <img src={`data:image/jpg;base64, ${base64String}`}  alt={product.productName} />


        <div className="product_box">
            <h2>{product.productName}</h2>
            <span>MK{product.productPrice}</span>
            <p>{product.productDescription}</p>
            </div>

            <BtnRender product={product} />


        </div>

   
    
    
    
    </>)
}

export default IndividualProducts