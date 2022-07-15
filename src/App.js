import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import * as authService from './services/authService.js';
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Homepage/Home.js";
import { Login }  from "./components/Authentication/Login.js";
import { Logout } from "./components/Authentication/Logout.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Blog from "./components/Blog/Blog.js";
import CreatePost from "./components/CreatePost/CreatePost.js";
import Footer from "./components/Footer.js";

function App() {
   const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

   useEffect(() => {
      let user = authService.getUser();

      setUserInfo({
         isAuthenticated: Boolean(user),
         user,
      });
   }, []);

   const onLogin = (username) => {
      setUserInfo({
         isAuthenticated: true,
         user: username,
      })
   };

   const onLogout = () => {
      setUserInfo({
         isAuthenticated: false,
         user: null,
      })
   };

   return (
      <div id="all">
         <Navigation {...userInfo} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route path="/logout" element={<Logout onLogout={onLogout} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create-post" element={<CreatePost />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
