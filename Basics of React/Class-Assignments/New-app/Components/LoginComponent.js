import React from 'react'
import {useState} from 'react'

function LoginComponent()
{
    const OnLoginHandler = () =>{
        if(username!=="username")
        {
        alert("invalid username")
        return
        }
        if(password!=="password")
        {
            alert("invalid password")
            return;
        }
        alert("login successfull")
    }

        const [username,setUsername]=useState("")
        const [password,setPassword]=useState("")
    
    return(
        
        <div>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='enter your username'/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter your password'/>
            <button onClick = {OnLoginHandler}>login</button>
        </div>
    )
}

export default LoginComponent