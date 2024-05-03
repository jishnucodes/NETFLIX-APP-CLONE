import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import './Login.css';

import { FaFacebookSquare } from "react-icons/fa";
import { useLogginContext } from "../../Context/LoginContext/LoginContext";


const Login = () => {
    
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    
    const { updateLoggin } = useLogginContext()
   

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user, [name]: value})
    }

    const handleLogin = (event) => {
        event.preventDefault();
        updateLoggin(user)
        navigate("/");
    }

    return (

        <div className="login-container" style={{ color: "black" }}>
            <Container>
                <header>
                    <a href="netflix">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                            alt="netflix-logo"
                            className="netflix-logo"
                        />
                    </a>
                </header>
                <div className="login-content">
                    <div className="login-form">
                        <h1>Sign In</h1>
                        <form>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    name="password"
                                    value={user.password} onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="login">
                                <button type="button" onClick={handleLogin} >Sign In</button>
                            </div>
                            <div className="remember-part mt-3">
                                <div>
                                    <input type="checkbox" />
                                    <label className="ms-1">Remember me</label>
                                </div>
                                <label>Need help?</label>
                            </div>
                        </form>
                        <div className="assist-section">
                            <span className="fb-logo ">
                                <FaFacebookSquare />
                            </span>
                            <span className="login-assist">login with facebook</span>
                            <p className="text-capitalize">
                                New to netflix
                                <span className="register ms-1">
                                    Sign Up Now
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>




    )
}
export default Login;