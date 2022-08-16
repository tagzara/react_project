import "./CreatePost.css";
import React, { useState, useContext } from 'react';
import { uid } from 'uid';
import { AuthContext } from "../../../utils/AuthProvider.js";
import { useNavigate } from 'react-router-dom';
import { ref, set } from "firebase/database";
import { db } from '../../../utils/firebase.js';
import  GameGenres  from "../GameGenres/GameGenres.js";

function CreatePost() {
   const { currentUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [imageUrl, setImageUrl] = useState("");
   const [description, setDescription] = useState("");
   let [genre, setGenre] = useState("⬇️ Select a genre ⬇️")

   const onPostCreate = (e) => {
      e.preventDefault();

      const uuid = uid();
      if (currentUser) {

         set(ref(db, `posts/${uuid}`), {
            author: currentUser.email,
            name: name,
            genre: genre,
            imageUrl: imageUrl,
            description: description,
            date: Date.now(),
            uuid
         })
            .catch((err) => console.log(err));

         setName(""); setImageUrl(""); setDescription("");

         navigate('/blog');
      } else {
         alert('You must log in to create a post!');
      }
   }

   return (
      <div className="post">
         <div className="post-header">Post your favourite <span className="color"> Game</span>
            <div className="post-header-caption"> <span className="color"> Share your gaming</span> Experience.</div></div>
         <div className="post-content">
            <div className="post-form">
               <form id="myForm" method="POST">
                  <div className="input-line">
                     <input id="name" type="text" placeholder="Name" className="input-name" value={name}
                        onChange={(e) => setName(e.target.value)} />
                     
                        <GameGenres setGenre={setGenre}/>
                     
                  </div>
                  <input type="text" id="subject" placeholder="image url" className="input-subject" value={imageUrl}
                     onChange={(e) => setImageUrl(e.target.value)} />
                  <textarea id="body" className="input-textarea" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                  <button type="button" id="submit" value="send" onClick={onPostCreate}>Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default CreatePost;