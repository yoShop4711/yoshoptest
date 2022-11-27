import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import axios from "axios";


function Login() {
  
  const [values, setValues] = useState({ username: "", password: "" });

    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]:value})

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  
      

      const res = await axios.post('/auth/login', {...values} )
     
      
      if(res.data.msg) {
            
        alert(res.data.msg)

    } else  {
        localStorage.setItem('firstLogin', true)
        window.location.href = '/'
        
    }

        
  
  

    
  }
    


  

  return (
    <div className="login_page">
      <h2>Login</h2>
      

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/forgot">Forgot your password? </Link>
        </div>
      </form>

      <p>
        New Customer? <Link to="/register"> Register</Link>
      </p>
    </div>
  );
}

export default Login;
