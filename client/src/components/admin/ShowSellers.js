import  { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import axios from 'axios'
import { DataGrid } from "@material-ui/data-grid"
import { Link } from "react-router-dom"



function ShowSellers() {
    const[vendors, setVendors] = useState([])
    const state = useContext(GlobalState)

    const[isAdmin] = state.userApi.isAdmin

    const toke = state.token[0]


    useEffect(() => {
        const ShowSeller = async() => {
            if(isAdmin) {
    
                const res = await axios.get('/auth/show_sellers', {
                    headers: {
                        Authorization: `Bearer ${toke}`
                    }
                })
    
                setVendors(res.data.sellers); 
                 
                       }
        }
    
        ShowSeller()
    

    }, [toke, isAdmin])


    const cols = [
        { field: 'id', headerName: 'ID', width: 300, renderCell: (id) => {
            return <Link to={`/user/${id.value}`}>`${id.value}`</Link>
        } },
        {
            field: "fullname",
            headerName: 'Fullname',
            width: 150
        }
    ]

    const rowData = vendors?.map(vendor => {
        return{
            fullname: vendor?.username,
            id: vendor?._id
        }
        
            })
        

    
    


    
    return(<div style={{width: "100%", height: 400}} >

    <DataGrid 
    
    rows={rowData}
    columns={cols}
    pageSize={5}
    rowsPerPageOptions={[5]}
    
    
    />

    </div>
    )
}

export default ShowSellers