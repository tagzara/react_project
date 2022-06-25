import ReactRotatingText from "react-rotating-text";
function Home() {
    return (
        <div className="header">
            <div className="social-media-links">
                <a href="/instagram"><img src="/images/instagram logo.png" className="social-media" alt="instagram-logo" /></a>
                <a href="/facebook"><img src="/images/facebook logo.png" className="social-media" alt="facebook-logo" /></a>
                <a href="/linkedin"><img src="/images/linkedin logo.png" className="social-media" alt="linkedin-logo" /></a>
                <a href="/twitter"><img src="/images/twitter logo.png" className="social-media" alt="twitter-logo" /></a>
            </div>
            <div className="header-content">
                <div className="header-content-box">
                    <div className="firstline"><span className="color">World Gaming </span>Community</div>
                    <div className="secondline">
                    <span className="color">Here we </span>
                        <ReactRotatingText items={['are community.', 'sharing our experience.', 'enjoying together.']} />
                    </div>
                </div>
            </div>
            <div className="header-image">
                <img src="/images/homepage.jpg" alt="logo" />
            </div>
        </div>
    );
}

export default Home;