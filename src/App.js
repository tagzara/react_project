import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuthState } from "./utils/AuthProvider.js";

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/HomePage/Home.js";
import About from "./components/About/About.js";
import Blog from "./components/Blog/Blog.js";
import Details from "./components/DetailsPage/Details.js";
import CreatePost from "./components/Posts/CreatePost/CreatePost.js";
import EditPost from "./components/Posts/EditPost/EditPost.js";
import Footer from "./components/Footer.js";
import ErrorPage from "./components/404/404.js";

function App() {
   const { isAuthenticated } = useAuthState();
   
   return (
      <AuthProvider>
         <div id="all">
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/details/:postId" element={ isAuthenticated ? <Details /> : <ErrorPage />}  />
               <Route path="/details/:postId/edit" element={ isAuthenticated ? <EditPost /> : <ErrorPage />}  />
               <Route path="/create-post" element={ isAuthenticated ? <CreatePost /> : <ErrorPage />} />
               <Route path="/404" element={<ErrorPage />} />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </div>
      </AuthProvider>
   );
}

export default App;
