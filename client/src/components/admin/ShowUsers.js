import  { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import axios from 'axios'
import { DataGrid } from "@material-ui/data-grid"
import { Link } from "react-router-dom"


function ShowUsers() {
    const[users, setUsers] = useState([])
    const state = useContext(GlobalState)

    const[isAdmin] = state.userApi.isAdmin

    const toke = state.token[0]


    useEffect(() => {
        const showUsers = async() => {
            if(isAdmin) {
    
                const res = await axios.get('/auth/show_users', {
                    headers: {
                        Authorization: `Bearer ${toke}`
                    }
                })
    
                setUsers(res.data.users); 
                       
                       }
        }
    
        showUsers()
    

    }, [toke, isAdmin])



    
    const cols = [
        { field: 'id', headerName: 'ID', width: 300, renderCell: (id) => {
            return <Link to={`/user/${id.value}`}>`${id.value}`</Link>
        }},

        {
            field: 'fullname',
            headerName: 'Fullname',
            width: 150,
        
          },
          {
            field: 'username',
            headerName: 'Username',
            width: 150,
        
          },
          {
            field: 'email',
            headerName: 'Email',
        
            width: 300,
        
          },
          {
            field: 'location',
            headerName: 'Location',
        
            width: 150,
        
          }


    ]

    const rowData = users?.map(user => {
return{
    fullname: user?.fullname,
    username: user?.username,
    email: user?.email,
    location: user?.location,
    id : user?._id 
}

    })

    // const rows = []
    


            
        return(<div style={{width: "100%", height: 400}} >
<DataGrid 

rows={rowData}
columns={cols}
pageSize={5}
rowsPerPageOptions={[5]}


/>


        
    
    </div>)
}

export default ShowUsers