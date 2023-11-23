import React, { useState } from 'react'

function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[country,setCountry]=useState("");


    const handelSignup=()=>{
        const user={
            name,
            email,
            password,
            gender,
            country
        }

        fetch("https://scary-cummerbund-fox.cyclic.app/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }

    const handelLogin=()=>{
        const user={
        
            email,
            password,
           
        }

        fetch("https://scary-cummerbund-fox.cyclic.app/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
  return (
    <div>
      <div >
        <h3>Signup</h3>
        <div><input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/></div>
        
        
        
        <div><input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/></div>
        
        <div><input type='text' placeholder='gender' onChange={(e)=>setGender(e.target.value)}/></div>
        
        <div> <input type='text' placeholder='country' onChange={(e)=>setCountry(e.target.value)}/></div>
        <button onClick={handelSignup}>Signup</button>
        
      </div>
      <br/>
      <br/>
      <div>
        <h3>Login</h3>
        
        <div><input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/></div>
        
        <div><input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/></div>
        
        <button onClick={handelLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login
