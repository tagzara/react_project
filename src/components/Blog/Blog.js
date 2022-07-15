import "./Blog.css";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard.js";
import * as blogService from '../../services/blogService.js';

function Blog() {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      blogService.getAll()
         .then(result => {
            setBlogs(result);
         });
   },[]);

    return (
        <div className="blog">
               <div className="blog-header"> <span>Blogs</span>
                  <span className="header-caption"> My Latest <span className="color"> blog posts.</span></span></div>
               <div className="blog-content">
                  { blogs.map(x => <BlogCard key={x._id} blog={x} />) }
               </div>
            </div>
    );
}

export default Blog;