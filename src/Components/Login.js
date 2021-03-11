import React, {useState} from "react"
import {useHistory} from "react-router-dom"

function Login({ setCurrentUser}) {
    const[loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    })
    
    const history = useHistory()



    function handleChange(e){
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(loginFormData)
         })
            .then((r) => r.json())
            .then((user) => {
                setCurrentUser(user)
                history.push("/")
            })
        }
        return(
        <div className = "login">
            <div className="login-form-box"> 
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-form" > Please Login!</h1>
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={loginFormData.username}
                        onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        name="password"
                        value={loginFormData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        />
                        <br></br>
                    <input type="submit" value="Login" className='input-button' />
                </form>
            </div>
        </div>
    )
}

export default Login;
