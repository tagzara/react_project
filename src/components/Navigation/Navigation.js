import "./Navigation.css"
import "./Navigation.scss";
import "animate.css";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
    
    return (
        <div className="navigation">
            <link href="http://cdn.phpoll.com/css/animate.css" rel="stylesheet" />
            <nav className="navbar navbar-inverse navbar-fixed-top" id="main-nav" role="navigation">
                <div className="main-logo">
                    <img src="/images/main-logo.png" />
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
                        <ul className="nav navbar-nav navbar-right">
                        <li><span className="greeting-user">Welcome guest! Please </span></li>
                        <li className="dropdown">
                                <button href="/login" className="dropdown-toggle" data-toggle="dropdown">Log In <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-lr animated slideInRight" role="menu">
                                    <div className="col-lg-12">
                                        <div className="text-center">
                                            <h3 className="animate__animated animate__bounce"><b>Log In</b></h3></div>
                                        <form id="ajax-login-form" action="/login" method="post" role="form" autocomplete="off">
                                            <div className="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" autocomplete="off" />
                                            </div>

                                            <div className="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" autocomplete="off" />
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-xs-7">
                                                        <input type="checkbox" tabindex="3" name="remember" id="remember" defaultChecked />
                                                        <label for="remember"> Remember Me</label>
                                                    </div>
                                                    <div className="col-xs-5 pull-right">
                                                        <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-success" value="Log In" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="text-center">
                                                            <a href="http://phpoll.com/recover" tabindex="5" className="forgot-password">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" className="hide" name="token" id="token" value="a465a2791ae0bae853cf4bf485dbe1b6" />
                                        </form>
                                    </div>
                                </ul>
                            </li>
                            <li><span className="greeting-user"> or </span></li>
                            <li className="dropdown">
                                <button href="/register" className="dropdown-toggle" data-toggle="dropdown">Register <span className="caret"></span></button>
                                <ul class="dropdown-menu dropdown-lr animated flipInX" role="menu">
                                    <div className="col-lg-12">
                                        <div className="text-center">
                                            <h3 className="animate__animated animate__bounce"><b>Register</b></h3></div>
                                        <form id="ajax-register-form" action="/register" method="post" role="form" autocomplete="off">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-xs-6 col-xs-offset-3">
                                                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-info" value="Register Now" />
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" className="hide" name="token" id="token" value="7c6f19960d63f53fcd05c3e0cbc434c0" />
                                        </form>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="navigation-content">
                <div className="logo">
                    <img src="/images/logo.png" />
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
                    <NavLink to="/contact" data-text="CONTACT" className="contact-link" >CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;