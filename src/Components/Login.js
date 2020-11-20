import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="login">
            {/* Spotify Logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="login__logo"/>
            {/* Button */}
            <a>Login with spotify</a>
        </div>
    )
}

export default Login