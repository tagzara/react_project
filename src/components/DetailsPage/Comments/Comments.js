import "./Comments.css";

function Comments() {
    
    return (
        <div className="response">
            <h4>Responses</h4>
            <div className="media response-info">
                <div className="media-left response-text-left">
                    <a href="/">
                        <img className="media-object" src="/images/icon1.png" alt="icon" />
                    </a>
                    <h5><a href="/">Admin</a></h5>
                </div>
                <div className="media-body response-text-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li>MARCH 21, 2013</li>
                        <li><a href="/">Reply</a></li>
                    </ul>
                    <div className="media response-info">
                        <div className="media-left response-text-left">
                            <a href="/">
                                <img className="media-object" src="/images/icon1.png" alt="icon" />
                            </a>
                            <h5><a href="/">Admin</a></h5>
                        </div>
                        <div className="media-body response-text-right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available,
                                sed do eiusmod tempor incididunt ut labore et.</p>
                            <ul>
                                <li>MARCH 21, 2014</li>
                                <li><a href="/">Reply</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="media response-info">
                <div className="media-left response-text-left">
                    <a href="/">
                        <img className="media-object" src="/images/icon1.png" alt="icon" />
                    </a>
                    <h5><a href="/">Admin</a></h5>
                </div>
                <div className="media-body response-text-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li>MARCH 21, 2013</li>
                        <li><a href="/">Reply</a></li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Comments;