import {useState, useEffect} from 'react'
import axios from 'axios'

function CategoriesApi() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCategories = async () =>{
            const res = await axios.get('/api/categories')
            setCategories(res.data)
            // console.log(categories);
        }

        getCategories()
    },[callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoriesApi
