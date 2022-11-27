import {  useEffect, useState } from "react";
import FullOrders from "./FullOrders";
import "./products.css"


function MerchantOrder({items}) {
    
    
    const[prods, setProds] = useState([])

    useEffect(() => {
        items.products?.map(element => {
          return  setProds(element)
        });
         

    }, [items.products])
    


 
     return(<div className="products">

<FullOrders prods={prods} items={items} />

    </div>)
}

export default MerchantOrder