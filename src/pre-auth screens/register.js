



// import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Register() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [emailerror,setemailerror]=useState(false)
  const [passworderror,setpassworderror]=useState(false)
  const [username,setusername]=useState("")
  const [usernameerror,setusernameerror]=useState(false)
  const [mobile,setmobile]=useState("")
  const [mobileerror,setmobileerror]=useState(false)
  const [userdata,setuserdata]=useState([])
  const [confirmpassword,setConfirmpassword]=useState("")
  const [confirmpassworderror,setConfirmpassworderror]=useState(false)
  const navigate = useNavigate()


  const handleregister=()=>{
       navigate('/login')
  }
  
  const handleusername=(data)=>{
      const user_value=data.target.value
     
      if(user_value.length>7){
             setusernameerror(true)
      }
      else{
          setusernameerror(false)
      }
      setusername(data.target.value)
      }
      
  
  const handleemail=(data)=>{
  const email_value=data.target.value
  if(email_value.length>18){
         setemailerror(true)
  }
  else{
      setemailerror(false)
  }
  setemail(data.target.value)
  
  }
  
  
  const handlepassword=(data)=>{
    const password=data.target.value
  if(password.length > 8){
      setpassworderror(true)
  }
  else{
      setpassworderror(false)
  }
  setpassword(data.target.value)
  
  }
  
  const handleconfirmpassword=(data)=>{
    const confirmpassword=data.target.value
    if(password===confirmpassword){
      setConfirmpassworderror(false)
    }
    else{
      setConfirmpassworderror(true)
    }
    setConfirmpassword(data.target.value)
    
  }





  const handlemobile=(data)=>{
      const mobile_value=data.target.value
      if((mobile_value.length!==10)){
             setmobileerror(true)
      }
      else{
          setmobileerror(false)
      }
      setmobile(data.target.value)
      }

 const handlesubmit=(event)=>{
      event.preventDefault()
      
  const user_data={
      username:username,
      email:email,
      password:password,
      confirmpassword:confirmpassword,
      mobile:mobile
  }
  // userdata.push(user_data);
  setuserdata([...userdata,user_data])
  userdata.push(user_data);
  localStorage.setItem("array",JSON.stringify(userdata));
  if(usernameerror===false && emailerror===false && passworderror===false && confirmpassworderror===false && mobileerror===false){
  alert("you can login now")
  }
  // console.log(user_data);
//  userdata.push(user_data);
  // console.log(userdata);
  setemail("")
  setmobile("")
  setpassword("")
  setusername("")
  setConfirmpassword("")
 
  
}
  

  
  
  
      return(
             <div className="formbody">
             <h1 className='register'>Registration Form</h1>
             <form className='forms' onSubmit={handlesubmit}>
               <label><b>Username</b></label><br/>
               <input type="text" id="username" value={username} onChange={(data)=>handleusername(data)}/><br/>
               {
                  usernameerror && <p style={{color:"red"}}>username contain less than 8 characters</p>
               }
              <label><b>Email</b></label><br/>
              <input type="email" value={email} onChange={(data)=>handleemail(data)}/><br/>
              {
                  emailerror && <p style={{color:"red"}} >please enter valid email</p>
              }
              <label><b>Password</b></label><br/>
              <input type="password" value={password} onChange={(data)=>handlepassword(data)}/><br/>
              {
                 (passworderror)&&<p style={{color:"red"}}>password must be less than 8 characters </p>
              }
              <label><b>Confirm Password</b></label><br/>
              <input type="password" value={confirmpassword} onChange={(data)=>handleconfirmpassword(data)}/><br/>
              {
                 (confirmpassworderror)&&<p style={{color:"red"}}>password should be same as confirmpassword</p>
              }
            
             <label><b>Mobile.No</b></label><br/>
             <input type="number" id="number" value={mobile} onChange={(data)=>handlemobile(data)}/><br/>
             {
              mobileerror && <p style={{color:"red"}}>mobile number must contain 10 digits</p>
             }<br/>
             <button onClick={handlesubmit} style={{width:"160px"}}>submit</button>

             <h6 onClick={handleregister} style={{color:"red",marginTop:"20px"}}>already register??login here</h6>
          
         
          
      
      
  </form>
            
  
  
  
             </div>
      );
}

export default Register


