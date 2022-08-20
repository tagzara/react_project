import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { ref, onValue, remove, update, increment, push, get } from "firebase/database";
import { db } from "../../utils/firebase.js";
import { AuthContext } from "../../utils/AuthProvider.js";
import './Details.css';
import Comments from './Comments/Comments.js';
import DetailsRight from './DetailsPageRight/DetailsRight.js';

function Details() {
    let params = useParams();
    let authToken = sessionStorage.getItem('Auth Token');
    let navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const [post, setPost] = useState({});

    useEffect(() => {
        if (!authToken) {
            navigate("/404")
        }
    }, [authToken, navigate]);

    useEffect(() => {
        onValue(ref(db, 'posts/' + params.postId), (snapshot) => {
            setPost(snapshot.val());
        });
    }, [params.postId]);

    
    const isOwner = post.authorId === currentUser?.uid;
    const createdAt = new Date(post.date).toLocaleString();

    function deletePost() {
        remove(ref(db, 'posts/' + params.postId))
            .catch((err) => console.log(err));

        navigate('/blog');
    }

    async function checkUsersLikes() {
        const usersLikeRef = ref(db, 'posts/' + params.postId + '/usersLiked');
        get(usersLikeRef).then(function (snapshot) {
            const usersLikeObj = snapshot.val();
            let valuesArr = [];
            for (const likeId in usersLikeObj) {
                valuesArr.push(usersLikeObj[likeId]);
            }

            if (valuesArr.includes(currentUser.uid)) {
                alert('You are already liked this post!');
            } else {
                addLike();
                alert('You successfully liked this post!');
            }
        }).catch(err => { console.log(err) });
    }

    const addLike = async () => {
        await update(ref(db, 'posts/' + params.postId), {
            likes: increment(1)
        });
        await push(ref(db, 'posts/' + params.postId + '/usersLiked'), currentUser.uid);

    }

    const OwnerView = () => {
        return (
            <div className="functional-buttons">
                <ul id="funct-btns-list">
                    <li><Link to={`/details/${post.uuid}/edit`}><button className="button-edit">Edit</button></Link></li>
                    <li><button className="button-24" onClick={() => { if (window.confirm('Are you sure to delete this record?')) { deletePost() }; }}>Delete</button></li>
                    <li><button className="button-like" onClick={() => { checkUsersLikes() }}>Like</button></li>
                </ul>
            </div>
        )
    }

    const MemberView = () => {
        return (
            <div className="functional-buttons">
                <ul id="funct-btns-list">
                    <li><button className="button-like" onClick={() => { checkUsersLikes() }}>Like</button></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="blog">
            <div className="container">
                <div className="col-md-8 blog-left" >
                    <div className="blog-info">
                        <div className="blog-info-text">
                            <div className="blog-img">
                                <img src={post.imageUrl} alt="pic" />
                            </div>
                            <p className="snglp">{post.description}</p>
                        </div>
                        {!currentUser
                            ? navigate("/404")
                            : <>
                                {isOwner
                                    ? < OwnerView />
                                    : < MemberView />
                                }
                              </>
                        }
                        <div className="clearfix"> </div>
                        <div className="comment-icons">
                            <ul>
                                <li><span></span><a href="/">{post.name}</a> </li>
                                <li><span className="clndr"></span>{createdAt}</li>
                                <li><span className="admin"></span> <a href="/">By {post.author}</a></li>
                                <li><span className="cmnts"></span> <a href="/">{post.commentsCount ? post.commentsCount : 0} comments</a></li>
                                <li><a href="/" className="like">{post.likes} likes</a></li>
                            </ul>
                        </div>
                        <Comments />
                    </div>
                </div>
                <DetailsRight />
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Details;