import "./Navigation.css"
import "./Navigation.scss";
import "animate.css";
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService.js';
import { Link, NavLink } from "react-router-dom";

import { Login } from '../Authentication/Login.js';
import { Register } from '../Authentication/Register.js';

function Navigation({
    onLogin
}) {
    const redirect = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');

        authService.login(username);

        onLogin(username);

        redirect('/');
    }

    return (
        <div className="navigation">
            <link href="http://cdn.phpoll.com/css/animate.css" rel="stylesheet" />
            <nav className="navbar navbar-inverse navbar-fixed-top" id="main-nav" role="navigation">
                <div className="main-logo">
                    <img src="/images/main-logo.png" alt="logo"/>
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
                        {!authService.isAuthenticated
                            ? <ul className="nav navbar-nav navbar-right">
                                <li><span className="greeting-user">Welcome, {authService.getUser()} ! </span></li>
                                <li><button>Logout</button></li>
                            </ul>
                            : <ul className="nav navbar-nav navbar-right">
                                <li><span className="greeting-user">Welcome, guest! Please </span></li>
                                <Login onLoginHandler={onLoginHandler} />
                                <li><span className="greeting-user"> or </span></li>
                                <Register />
                            </ul>}
                    </div>
                </div>
            </nav>
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
                    <NavLink to="/portfolio" data-text="PORTFOLIO" className="portfolio-link" >PORTFOLIO</NavLink>
                    <NavLink to="/create-post" data-text="POST" className="post-link" >POST</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;