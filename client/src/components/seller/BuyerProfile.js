import { useState, useEffect, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap"



function BuyerProfile() {

    const[users, setUsers] = useState([])
    const[single, setSingle] = useState([])
    const state = useContext(GlobalState)
    const token = state.token
    const{id} = useParams()

    useEffect(() => {

        const showUsers = async() => {
        
    
                const res = await axios.get('/auth/show_users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
    
                setUsers(res.data.users); 
                       
                       
        }
    
        showUsers()

        

        
    }, [token])


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
            <ListGroup.Item> <Link to={`/message_buyer/${single._id}`}>message buyer</Link> </ListGroup.Item>
            
            </ListGroup>
            
            
            
        </Card.Body>
    </Card>






    </div>)
}

export default BuyerProfile