import React, { useState } from "react";
import { auth, db } from "../../utils/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        function onRegister() {
            if (password !== confirmPassword) {
                alert('Passords does\'t mutch!');
            } else {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        set(ref(db, "users/" + userCredential.user.uid), {
                            username: username,
                            email: email,
                        });
                    })
                    .catch((error) => console.log(error));
                navigate("/");
            }
        }
        onRegister();
    };

    return (
        <li className="dropdown">
            <button href="/register" className="dropdown-toggle btn btn-default btn-sm" data-toggle="dropdown">
                <span class="glyphicon glyphicon-lock"></span> Register<span className="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-lr animated flipInX" role="menu">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="animate__animated animate__bounce"><b>Register</b></h3></div>
                    <form id="ajax-register-form" method="POST" onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <input type="submit" name="register-submit" id="register-submit" className="form-control btn-success" value="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </ul>
        </li>
    )
}