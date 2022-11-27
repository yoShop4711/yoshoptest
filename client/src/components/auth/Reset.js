import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import './auth.css'

function Reset() {

    const location = useLocation()
    const token = location.state.data
    const[password, setPassword] = useState("")

    const handleChange = (event) => {
        setPassword(event.target.value)
    }


    const handleSubmit = async() => {

        

         await axios.put('/auth/reset_password', {password}, {
            headers: {Authorization: `Bearer ${token}`}
         })

         window.location.href = "/login"
        


    }
    

    
    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            <div className="row">
                
                <label htmlFor="password">New Password</label>
                <input type="text" name="password" id="password" value={password} onChange={handleChange}  />

                
                <button onClick={handleSubmit}>Reset Password</button>
            </div>
        </div>
    )
}

export default Reset
