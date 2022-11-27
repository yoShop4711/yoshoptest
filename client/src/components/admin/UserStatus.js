import { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { GlobalState } from "../../GlobalState"
import "./status.css"

function UserStatus() {
    const {id} = useParams()
    const[role, setRole] = useState("")
    const state = useContext(GlobalState)

    
    const toke = state.token[0]

            const changeStatus = async () => {
                
                const res = await axios.put(`/auth/change_role/${id}`, {role}, {
                    headers: {
                        Authorization: `Bearer ${toke}`
                    }
                })

                alert(res.data.msg)
                window.location.href = "/show_users"
            }


            const handleChange = (event) => {
                setRole(event.target.value)
            }


    return(

<div className="profile_page edit_user">
            

            <div className="col-left">
                <h2> Change User Status</h2>
                <div className="form-group">
                    <label htmlFor="role">0 is regular user and 1 is Seller. Role should be between 0 and 1.</label>
                    <input type="text" name="role" value={role} onChange={handleChange}  />
                </div>

                <button onClick={changeStatus}>update</button>
            </div>
        </div>

    )
}

export default UserStatus