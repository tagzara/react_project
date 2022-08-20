import "./EditPost.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, onValue, update } from "firebase/database";
import { db } from '../../../utils/firebase.js';
import GameGenres from "../GameGenres/GameGenres.js";

function EditPost(postId) {
   let params = useParams();
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [imageUrl, setImageUrl] = useState("");
   const [description, setDescription] = useState("");
   let [genre, setGenre] = useState("⬇️ Select a genre ⬇️")

   useEffect(() => {
      onValue(ref(db, 'posts/' + params.postId), (snapshot) => {
         setName(snapshot.val().name);
         setImageUrl(snapshot.val().imageUrl);
         setDescription(snapshot.val().description);
         setGenre(snapshot.val().genre);
      });
   }, [params.postId]);

   const onPostEdit = (e) => {
      e.preventDefault();

         update(ref(db, `posts/` + params.postId), {
            name: name,
            genre: genre,
            imageUrl: imageUrl,
            description: description
         })
            .catch((err) => console.log(err));

         navigate('/blog');
   }

   return (
      <div className="post">
         <div className="post-header">Edit your post<span className="color"> details</span>
            <div className="post-header-caption"> <span className="color"> Share your new</span> experience.</div></div>
         <div className="post-content">
            <div className="post-form">
               <form id="myForm" method="POST">
                  <div className="input-line">
                     <input id="name" type="text" className="input-name" defaultValue={name} 
                        onChange={(e) => setName(e.target.value)} />

                     <GameGenres setGenre={setGenre} />

                  </div>
                  <input type="text" id="subject" placeholder="image url" className="input-subject" defaultValue={imageUrl} 
                     onChange={(e) => setImageUrl(e.target.value)} />
                  <textarea id="body" className="input-textarea" placeholder="description" defaultValue={description}  onChange={(e) => setDescription(e.target.value)}></textarea>
                  <button type="button" id="submit" value="send" onClick={onPostEdit}>Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default EditPost;