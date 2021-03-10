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
            <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                type="text"
                name="username"
                autoComplete="off"
                value={loginFormData.username}
                onChange={handleChange}
                />
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleChange}
                autoComplete="current-password"
                />
                <input type="submit" value="Login" />
            </form>
    </div>
    )
}

export default Login;
