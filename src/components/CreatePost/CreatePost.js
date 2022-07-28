import "./CreatePost.css";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../utils/AuthProvider.js";
import * as blogService from '../../services/blogService.js';

function CreatePost() {
   const { currentUser } = useContext(AuthContext);
   const navigate = useNavigate();

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
      }, currentUser.accessToken)
         .then(result => {
            navigate('/blog');
         })
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
                  <textarea id="body" className="input-textarea" placeholder="description"></textarea>
                  <button type="button" id="submit" value="send">Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default CreatePost;