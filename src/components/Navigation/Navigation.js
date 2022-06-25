import "./Navigation.css"
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <div className="cursor"></div>
            <div className="loader">
                <span className="color">World Gaming</span>Community
            </div>
            <div className="breaker">
            </div>
            <div className="breaker-two">
            </div>
            <div className="navigation-content">
                <div className="logo">
                    <img src="/images/site-logo.jpg" alt="logo" />
                </div>
                <div className="navigation-close">
                    <span className="close-first"></span>
                    <span className="close-second"></span>
                </div>
                <div className="navigation-links">
                    <NavLink to="/" data-text="HOME" className="home-link" >HOME</NavLink>
                    <NavLink to="/about" data-text="ABOUT" className="about-link" >ABOUT</NavLink>
                    <NavLink to="/blog" data-text="BLOG" className="blog-link" >BLOG</NavLink>
                    <NavLink to="/portfolio" data-text="PORTFOLIO" className="portfolio-link" >PORTFOLIO</NavLink>
                    <NavLink to="/contact" data-text="CONTACT" className="contact-link" >CONTACT</NavLink>
                </div>
            </div>
            <div className="navigation-bar">

                <div className="menubar">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
                <div className="logo">
                    <img src="/images/site-logo.jpg" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Navigation;