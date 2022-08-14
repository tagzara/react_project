import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../utils/firebase.js";
import './Details.css';


function Details(postId) {
    let params = useParams();
    const detailsRef = ref(db, 'posts/' + params.postId);

    const dataValues = [];

    onValue(detailsRef, (snapshot) => {
        snapshot.forEach(function (childNodes) {
            dataValues.push(childNodes.val());
        });
    });

    // console.log(dataValues);

    let authorId = dataValues[0];
    let createdAt = new Date(dataValues[1]).toLocaleString();
    let description = dataValues[2];
    let genre = dataValues[3];
    let postImage = dataValues[4];
    let postTitle = dataValues[5];
    let uid = dataValues[6];

    return (
        <div className="blog">
            <div className="container">
                <div className="col-md-8 blog-left" >
                    <div className="blog-info">
                        <div className="blog-info-text">
                            <div className="blog-img">
                                <img src={postImage} alt="pic" />
                            </div>
                            <p className="snglp">{description}</p>
                        </div>
                        <div className="functional-buttons">
                            <ul id="funct-btns-list">
                                <li><button className="button-edit" role="button">Edit</button></li>
                                <li><button className="button-24" role="button">Delete</button></li>                            
                                <li><button className="button-like" role="button">Like</button></li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="comment-icons">
                            <ul>
                                <li><span></span><a href="/">{postTitle}</a> </li>
                                <li><span className="clndr"></span>{createdAt}</li>
                                <li><span className="admin"></span> <a href="/">By Admin</a></li>
                                <li><span className="cmnts"></span> <a href="/">5 comments</a></li>
                                <li><a href="/" className="like">15 likes</a></li>
                            </ul>
                        </div>
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
                    </div>
                    
                </div>
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
                            <a href="single.html" className="list-group-item">Cras justo odio</a>
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
                            <input type="text" value="Username " onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="" />
                            <input type="text" value="Subject " onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}" required="" />
                            <textarea type="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Comment...';}" required="">Your Comment...</textarea>
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Details;