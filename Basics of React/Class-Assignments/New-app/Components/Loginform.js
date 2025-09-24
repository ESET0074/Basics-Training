import { useState } from "react"

export default function Loginform()
{
    const [loginData,setLoginData] =useState({
        username:"",
        password:""
    })

    const onUserNameChangeHandler = (e)=>{
        setLoginData(
            {
                ...loginData,
                username: e.target.value
            }
        )
    }
    const onPasswordChangeHandler = (e)=>{
        setLoginData({
            ...loginData,
            password:e.target.value
        })

    }

    const loginButtonHandler = (e) => {
        e.preventDefault();

        console.log(e)
    }


    return(
        <div>
            Welcome to Login from
            <form onSubmit={loginButtonHandler}>
            <br/>
            <input type='text' value={loginData.name} onChange={onUserNameChangeHandler}/>
            <br/>
            <input type = 'password' value={loginData.password} onChange={onPasswordChangeHandler}/>
            <br/>
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}