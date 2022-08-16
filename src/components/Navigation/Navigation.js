import "./Navigation.css"
import "./Navigation.scss";
import "animate.css";
import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../../utils/firebase.js";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../utils/AuthProvider.js";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";

import { Login } from '../Authentication/Login.js';
import { Register } from '../Authentication/Register.js';

function Navigation() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            const starCountRef = ref(db, "users/" + currentUser.uid);
            onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    setUsername(data.username);
                }
            });
        }
    }, [currentUser]);

    const clickLogout = () => {
        signOut(auth);
        navigate('/');
    }

    return (
        <div className="navigation">

            <nav className="navbar navbar-inverse navbar-fixed-top" id="main-nav" role="navigation">
                <div className="main-logo">
                    <img src="/images/main-logo.png" alt="logo" />
                </div>
                <div className="cursor"></div>
                <div className="loader">
                    <span className="color">World Gaming</span>Community
                </div>
                <div className="breaker">
                </div>
                <div className="breaker-two">
                </div>
                <div className="container-fluid">
                    <div id="navbar" className="collapse navbar-collapse">
                        <div className="navigation-bar">
                            <div className="menubar">
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                            </div>
                        </div>
                        {currentUser
                            ? < ul className="nav navbar-nav navbar-right">
                                <li><span className="greeting-user">Welcome, {username} ! </span></li>
                                <li><button type="button" className="btn btn-default btn-sm" onClick={clickLogout}>
                                    <span className="glyphicon glyphicon-log-out"></span> Log out
                                </button></li>
                            </ul>
                            : <ul className="nav navbar-nav navbar-right">
                                <li><span className="greeting-user">Welcome, guest! Please </span></li>
                                <Login />
                                <li><span className="greeting-user"> or </span></li>
                                <Register />
                            </ul>
                        }
                    </div>
                </div>
            </nav >
            <div className="navigation-content">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="navigation-close">
                    <span className="close-first"></span>
                    <span className="close-second"></span>
                </div>
                <div className="navigation-links">
                    <Link to="/" data-text="HOME" className="home-link" >HOME</Link>
                    <NavLink to="/about" data-text="ABOUT" className="about-link" >ABOUT</NavLink>
                    <NavLink to="/blog" data-text="BLOG" className="blog-link" >BLOG</NavLink>
                    <NavLink to="/forum" data-text="FORUM" className="portfolio-link" >FORUM</NavLink>
                    <NavLink to="/create-post" data-text="CREATE.POST" className="post-link" >CREATE POST</NavLink>
                </div>
            </div>
        </div >
    );
}

export default Navigation;