import React, { useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../../../utils/firebase.js";
import { AuthContext } from "../../../utils/AuthProvider.js";
import { ref, query, onValue, orderByChild, limitToLast, update, increment, push } from "firebase/database";
import { Link } from "react-router-dom";
import "./DetailsRight.css";

function DetailsRight() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    let params = useParams();
    const topRatedArray = [];

    const addComment = async () => {
        await update(ref(db, 'posts/' + params.postId), {
            commentsCount: increment(1),
            commentsObj: {
                username: username,
                comment: comment,
                date: new Date().toLocaleDateString
            }
        });
    }

    async function getMostLikedPosts() {
        const scoreBoardRef = query(ref(db, 'posts'), orderByChild('likes'), limitToLast(3));
        onValue(scoreBoardRef, (snapshot) => {
            snapshot.forEach(function (snapshotChild) {
                const data = snapshotChild.val();
                data.date = new Date(data.date).toLocaleString();
                data.description = data.description.substring(0, 55) + "...";
                topRatedArray.push(data);
            });
        });
    }
    getMostLikedPosts();

    topRatedArray.sort((a, b) => (a.likes) > (b.likes) ? -1 : 1);

    return (
        <div className="col-md-4 single-page-right">
            <div className="recent-posts">
                <h4>Top Rated Posts</h4>
                {topRatedArray.map((value, index) =>
                    <div className="recent-posts-info" key={index}>
                        <div className="posts-left sngl-img">
                            <a href="single.html"> <img src={value.imageUrl} className="img-responsive zoom-img" alt="postimage" /> </a>
                        </div>
                        <div className="posts-right">
                            <label>{value.date}</label>
                            <h5><a href="single.html">{value.author}</a></h5>
                            <p>{value.description}</p>
                            <Link to={`/details/${value.uuid}`} className="btn btn-primary hvr-rectangle-in">Read More</Link>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                )}
                <div className="clearfix"> </div>
            </div>
            <div className="coment-form">
                <h4>Leave your comment</h4>
                <form>
                    <input type="text" required="" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea type="text" required="" placeholder="Your Comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input type="submit" value="SUBMIT" onClick={() => { addComment() }} />
                </form>
            </div>
        </div>
    );
}

export default DetailsRight;