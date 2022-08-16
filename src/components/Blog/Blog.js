import "./Blog.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { ref, onValue } from "firebase/database";
import { db } from "../../utils/firebase.js";
function Blog() {

   const [posts, setPosts] = useState([]);


   useEffect(() => {
      const posts = [];
      onValue(ref(db, 'posts'), (snapshot) => {
         snapshot.forEach((post) => {
            let data = post.val();
            let formatedDate = new Date(data.date).toLocaleString();
            data.date = formatedDate;
            posts.push(data);
            
         });
         setPosts(posts);
      });
   }, []);


   return (
      <div className="blog">
         <div className="blog-header"> <span>Blogs</span>
            <span className="header-caption"> Our Latest <span className="color"> blog posts.</span></span></div>
         <div className="blog-content">
            {posts.map((value, index) =>
               <div className="blogs" key={index}>
                  <NavLink to={`/details/${value.uuid}`}>
                     <div className="img">
                        <img src={value.imageUrl} alt="blog-one" />
                        <div className="blog-date">{value.date}</div>
                        <div className="genre">{value.genre}</div>
                     </div>
                     <div className="blog-text">
                        <h3>{value.name}</h3>
                        <p>{value.description}</p>
                     </div></NavLink>
               </div>
            )}
         </div>
      </div>
   );
}

export default Blog;