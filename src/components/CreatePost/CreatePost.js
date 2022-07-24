import "./CreatePost.css";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as blogService from '../../services/blogService.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import InputError from "../Shared/InputError/InputError.js";

function CreatePost() {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const [errorMessage, setErrorMessage] = useState('');

   const onPostCreate = (e) => {
      e.preventDefault();
      let formData = new FormData(e.currentTarget);

      let name = formData.get('name');
      let genre = formData.get('genre');
      let imageUrl = formData.get('imageUrl');
      let description = formData.get('description');

      blogService.create({
         name,
         genre,
         imageUrl,
         description,
      }, user.accessToken)
         .then(result => {
            navigate('/blog');
         })
   }

   const onDescriptionChangeHandler = (e) => {
      console.log(e.target.value);

      if (e.target.value < 10) {
         setErrorMessage('Description too short');
      } else {
         setErrorMessage('');
      }
   }

   return (
      <div className="post">
         <div className="post-header">Post your favourite <span className="color"> Game</span>
            <div className="post-header-caption"> <span className="color"> Share your gaming</span> Experience.</div></div>
         <div className="post-content">
            <div className="post-form">
               <form id="myForm" onSubmit={onPostCreate} method="POST">
                  <div className="input-line">
                     <input id="name" type="text" placeholder="Name" className="input-name" />
                     <select id="genre" placeholder="Genre" className="input-name">
                        <option value="action/shooter">Action/Shooter</option>
                        <option value="adventure">Adventure</option>
                        <option value="strategy">Strategy</option>
                     </select>
                  </div>
                  <input type="text" id="subject" placeholder="image url" className="input-subject" />
                  <textarea id="body" className="input-textarea" placeholder="description" onBlur={onDescriptionChangeHandler}></textarea>
                  <InputError>{errorMessage}</InputError>
                  <button type="button" id="submit" value="send">Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default CreatePost;