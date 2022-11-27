import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './auth.css'

function Forgot() {
    const navigate = useNavigate()

    const[values, setValues] = useState({question: "", email: "" })


    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]:value})



    }

    const handleSubmit = async() => {
        
        const res = await axios.post('/auth/forgot_password', {...values})

        // console.log(res.data.accessToken);
        if(res.data.msg) {
            alert(res.data.msg)
        } else{

            navigate('/reset', { state: {data: res.data.accessToken}})


        }


        


    }
    
    return (
        <div className="fg_pass">
            <h2>Forgot Your Password?</h2>

            <div className="row">
                
                <label htmlFor="email">Enter your email address</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange}  />

                <label htmlFor="answer">Enter your unique word</label>
                <input type="text" name="question" id="question" value={values.question} onChange={handleChange} />

                

                <button onClick={handleSubmit}>Verify your email</button>
            </div>
        </div>
    )
}

export default Forgot
 
