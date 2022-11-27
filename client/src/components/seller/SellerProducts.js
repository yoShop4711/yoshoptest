import axios from "axios"
import {useEffect, useState, useContext} from "react"
import {GlobalState} from "../../GlobalState"
import IndividualProducts from "./IndividualProducts"
import "./sellerProducts.css"

function SellerProducts() {
    const state = useContext(GlobalState)

    const[products, setProducts] = useState([])
    const[token] = state.token

    

    useEffect(() => {
        const sellerProds = async() => {

            const res = await axios.get('/api/seller_products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setProducts(res.data.products);


        }
        sellerProds()

    }, [token])

    

    return(<div className="products">

    
    {
products.map(product => {
    return <IndividualProducts key={product._id} product={product} />
})
    }
    
    
    </div>)
}


export default SellerProducts