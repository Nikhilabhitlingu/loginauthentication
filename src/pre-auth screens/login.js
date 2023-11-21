

import React, {  useContext, useState } from 'react'
import { Login } from '../routing/navigation'
// import { useNavigate } from 'react-router-dom'



function LoginPage() {
    const loginstatus=useContext(Login)
    console.log(loginstatus)

    const [username, setusername] = useState("")
    const [emailid, setemailid] = useState("")
    const [password, setpassword] = useState("")
    const [loginError, setloginError] = useState(false)
    // const navigate=useNavigate()

    const storedArr = localStorage.getItem("array");
    const arrays = JSON.parse(storedArr);

    const handleusername = (data) => {
        setusername(data.target.value)
    }

    const handleemail = (data) => {
        setemailid(data.target.value)
    }

    const handlepassword = (data) => {
        setpassword(data.target.value)
    }

    const handlebutton = (event) => {
        event.preventDefault()
        // loginstatus.handlelogin()
        
      
    

const user = arrays.find(array => array.username === username && array.email === emailid && array.password === password);

if (user) {
    setloginError(false);

    alert("login successful");
    loginstatus.handlelogin()
} else {
    setloginError(true);
    if (loginError) {
        alert("invalid credentials");
    }
}

    
        setemailid("")
        setpassword("")
        setusername("")

    }

    return (
        <>
        <h1 className='register'>Login Form</h1>
<form className='login'>

            <label><b>username</b></label><br></br>
            <input type='text' value={username} onChange={(data) => handleusername(data)} /><br></br>
            <label><b>emailid</b></label><br></br>
            <input type='email' value={emailid} onChange={(data) => handleemail(data)} /><br></br>
            <label><b>password</b></label><br></br>
            <input type='password' value={password} onChange={(data) => handlepassword(data)} /><br/><br/>
            <button onClick={handlebutton}>submit</button>
        </form>    

        </>
    )
}

export default LoginPage