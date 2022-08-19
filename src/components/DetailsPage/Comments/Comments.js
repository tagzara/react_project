import React, { useState, useEffect } from 'react';
import { db } from "../../../utils/firebase.js";
import { ref, query, onValue, orderByChild } from "firebase/database";
import { useParams } from "react-router-dom";
import "./Comments.css";

function Comments() {
    let params = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commArr = [];
        const commRef = query(ref(db, 'posts/' + params.postId + '/commentsArr'), orderByChild('date'));

        onValue(commRef, (snapshot) => {
            snapshot.forEach(function (comment) {
                let data = comment.val();
                let formatedDate = new Date(data.date).toLocaleString();
                data.date = formatedDate;
                commArr.push(data);
            });
            setComments(commArr);
        });
    }, [params.postId]);

    return (
        <div className="response">
            <h4>Responses</h4>
            {Array.isArray(comments) && comments.length === 0
                ? <p>There is no comments for this post yet... Be the first one?</p>
                : <div className="comments-area">
                    {comments.map((value, index) =>
                        <div className="media response-info" key={index}>
                            <div className="media-left response-text-left">
                                <a href="/">
                                    <img className="media-object" src="/images/icon1.png" alt="icon" />
                                </a>
                                <h5><a href="/">{value.username}</a></h5>
                            </div>
                            <div className="media-body response-text-right">
                                <p>{value.comment}</p>
                                <ul>
                                    <li>{value.date}</li>
                                </ul>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default Comments;