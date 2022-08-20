import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../utils/firebase.js';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();
        function onLogin() {
            signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    console.log(response)
                    sessionStorage.setItem('Auth Token',
                        response._tokenResponse.refreshToken);
                })
                .catch((error) =>
                    console.log(error)
                );
            navigate("/");
        }
        onLogin();
    };

    return (
        <li className="dropdown">
            <button href="/login" className="dropdown-toggle btn btn-default btn-sm" data-toggle="dropdown">
                <span className="glyphicon glyphicon-log-in"></span> Log In <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-lr animated slideInRight" role="menu">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="animate__animated animate__bounce"><b>Log In</b></h3></div>
                    <form id="ajax-login-form" onSubmit={onLoginSubmitHandler} method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" onChange={(e) =>
                                setEmail(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={(e) =>
                                setPassword(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-7">
                                    <input type="checkbox" name="remember" id="remember" defaultChecked />
                                    <label htmlFor="remember"> Remember Me</label>
                                </div>
                                <div className="col-xs-5 pull-right">
                                    <input type="submit" name="login-submit" id="login-submit" className="form-control btn-success" value="Log In" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <a href="http://phpoll.com/recover" className="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </ul>
        </li>
    )
}
