import "./DetailsRight.css";
function DetailsRight() {
    return (
        <div className="col-md-4 single-page-right">
                    <div className="category blog-ctgry">
                        <h4>Top Games</h4>
                        <div className="list-group">
                            <a href="single.html" className="list-group-item">Cras justo odio</a>
                            <a href="single.html" className="list-group-item">Dapibus ac facilisis in</a>
                            <a href="single.html" className="list-group-item">Morbi leo risus</a>
                            <a href="single.html" className="list-group-item">Porta ac consectetur ac</a>
                            <a href="single.html" className="list-group-item">Vestibulum at eros</a>
                            <a href="single.html" className="list-group-item">Cras justo odio</a>
                        </div>
                    </div>
                    <div className="recent-posts">
                        <h4>Recent posts</h4>
                        <div className="recent-posts-info">
                            <div className="posts-left sngl-img">
                                <a href="single.html"> <img src="/images/gl7.jpg" className="img-responsive zoom-img" alt="postimage" /> </a>
                            </div>
                            <div className="posts-right">
                                <label>March 5, 2020</label>
                                <h5><a href="single.html">Finibus Bonorum</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing incididunt.</p>
                                <a href="single.html" className="btn btn-primary hvr-rectangle-in">Read More</a>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="recent-posts-info">
                            <div className="posts-left sngl-img">
                                <a href="single.html"> <img src="/images/gl4.jpg" className="img-responsive zoom-img" alt="postimage" /></a>
                            </div>
                            <div className="posts-right">
                                <label>March 1, 2020</label>
                                <h5><a href="single.html">Finibus Bonorum</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing incididunt.</p>
                                <a href="single.html" className="btn btn-primary hvr-rectangle-in">Read More</a>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="coment-form">
                        <h4>Leave your comment</h4>
                        <form>
                            <input type="text" value="Username " required="" />
                            <input type="text" value="Subject " required="" />
                            <textarea type="text" required="">Your Comment...</textarea>
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
    );
}

export default DetailsRight;