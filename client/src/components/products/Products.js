import { useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import "./products.css"
import ProductItem from "./ProductItem"
import Filters from "./Filters"
import LoadMore from "./LoadMore"
import Loading from "./Loading"

function Products() {
    const state = useContext(GlobalState)

    
     const [products] = state.ProductsApi.products
    const [loading, setLoading] = useState(false)



    

    if(loading) return <div><Loading /></div>
    return(

        <>
    
    <Filters />

    
    <div className="products">



       {
        products.map(product => {
            return <ProductItem key={product._id} product={product}  />
        })
       } 
    
    </div>

    <LoadMore />
        {products.length === 0 && <Loading />}

    
    </>
    )
}

export default Products