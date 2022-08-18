import { db } from "../../../utils/firebase.js";
import { ref, query, onValue, orderByChild, limitToLast } from "firebase/database";
import "./DetailsRight.css";
import { Link } from "react-router-dom";

const topRatedArray = [];

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

topRatedArray.sort((a,b) => (a.likes) > (b.likes) ? -1 : 1);

function DetailsRight() {
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