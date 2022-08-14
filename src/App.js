import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthProvider.js";

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/HomePage/Home.js";
import About from "./components/About/About.js";
import Portfolio from "./components/Portfolio.js";
import Blog from "./components/Blog/Blog.js";
import Details from "./components/DetailsPage/Details.js";
import CreatePost from "./components/CreatePost/CreatePost.js";
import Footer from "./components/Footer.js";
import ErrorPage from "./components/404/404.js";

function App() {

   return (
      <AuthProvider>
         <div id="all">
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/details/:postId" element={<Details />}  />
               <Route path="/create-post" element={<CreatePost />} />
               <Route path="/404" element={<ErrorPage />} />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </div>
      </AuthProvider>
   );
}

export default App;
