import "./About.css";

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-header">
                    About <span className="color">Us</span>
                    <span className="header-caption"><span className="color">Get to Know </span> us.</span>
                </div>
                <div className="about-main">
                    <div className="about-first-paragraph wow">
                        <span className="about-first-line">
                            We are
                            <span className="color"> gaming community</span>
                            website </span>
                        <br />
                        <span className="about-second-line">Here we talk about our favourite games, share our gaming experience, progress, photos and videos. We comment and discuss everything in our forum. </span>
                    </div>
                    <div className="about-img">
                        <img src="/images/community.png" alt="yourImage" />
                    </div>
                </div>

            </div>
            <div id="services">
                <div className="services-heading wow">
                    <span className="color">Our</span> Services
                </div>
                <div className="services-content">
                    <div className="service-one service wow">
                        <div className="service-img">
                            <img src="/images/forum.png" alt="service-one" />
                        </div>
                        <div className="service-description">
                            <a class="forum-btn btn btn-primary" href="/forum" role="button">Our Forum</a>
                            <p>It's fun to discuss the latest gaming news with others or share your thoughts on a game you're playing. Our gaming forum bring together people across the globe who want to talk about video games. Some of them encompass all games, while others focus on a specific genre or company. </p>

                        </div>
                    </div>
                    <div className="service-two service wow">
                        <div className="service-img">
                            <img src="/images/blog-icon.png" alt="service-two" />
                        </div>
                        <div className="service-description">
                            <a class="forum-btn btn btn-primary" href="/blog" role="button">Our Blog</a>
                            <p>In our blog service you can find gaming reviews, pictures, news, tips and more. Also you can post your own reviews and share your gaming experience with owr community. </p>
                        </div>
                    </div>
                    <div className="service-three service wow">
                        <div className="service-img">
                            <img src="/images/media.png" alt="service-three" />
                        </div>
                        <div className="service-description">
                            <a class="forum-btn btn btn-primary" href="/media" role="button">Our Videos</a>
                            <p>In our video sharing platform you can fing video reviews for upcomming games, videos from community members that sharing their experience in the games. Also you can upload your own videos and share with others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;