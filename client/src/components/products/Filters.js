import { useContext, useState } from "react"
import { GlobalState } from "../../GlobalState"
import "./products.css"

function Filters() {
const state = useContext(GlobalState)

 



const [categories] = state.CategoriesApi.categories;
const[name, setName] = state.ProductsApi.name
const [sort, setSort] = state.ProductsApi.sort
const [search, setSearch] = state.ProductsApi.search



const handleName = e => {
    setName(e.target.value)
    setSearch('')
}




    return(<div className="filter_menu">
        <div className="row">
        <span>Filters: </span>
                <select name="category" value={name} onChange={handleName} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
        </div>
        <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

<div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>



    
    
    
    </div>)
}


export default Filters