import { useState, useEffect, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap"
import "./user.css"


function User() {
    const[users, setUsers] = useState([])
    const[single, setSingle] = useState([])
    const state = useContext(GlobalState)
    const[isAdmin] = state.userApi.isAdmin

    const toke = state.token[0]


    const {id} = useParams()
    

    useEffect(() => {

        const showUsers = async() => {
        
    
                const res = await axios.get('/auth/show_users', {
                    headers: {
                        Authorization: `Bearer ${toke}`
                    }
                })
    
                setUsers(res.data.users); 
                       
                       
        }
    
        showUsers()

        

        
    }, [isAdmin, toke])


    useEffect(() => {

        if(id) {
            users.forEach(user => {
                if(user._id === id) setSingle(user)
                
                
                
                
            })
        }
    


    }, [id, users])

    if(single.length === 0) return null;
    const picture = single.userImage.data.data

    const base64String =  window.btoa(
        new Uint8Array(picture)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      

       
return(
    <div className="col d-flex justify-content-center centered">
    <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={`data:image/jpg;base64, ${base64String}`}  />

        <Card.Body>
            <Card.Title>{single.fullname}</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item><span style={{color: "red"}}>username: </span>{single.username}</ListGroup.Item>
            <ListGroup.Item> <span style={{color: "blue"}}>Email: </span> {single.email}</ListGroup.Item>
            <ListGroup.Item> <span style={{color: "green"}}>Location: </span> {single.location}</ListGroup.Item>
            <ListGroup.Item><span style={{color: "red"}}>Security: </span> {single.question}</ListGroup.Item>
            </ListGroup>
            
            <Card.Link href={`/user_status/${single._id}`}>User Status</Card.Link>
            <Card.Link href={`/delete_user/${single._id}`}>Delete User</Card.Link>
            
        </Card.Body>
    </Card>





    </div>

)

}


export default User