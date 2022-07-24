import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import { AuthContext } from "./contexts/AuthContext.js";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Homepage/Home.js";
import { Login } from "./components/Authentication/Login.js";
import { Logout } from "./components/Authentication/Logout.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Blog from "./components/Blog/Blog.js";
import CreatePost from "./components/CreatePost/CreatePost.js";
import Footer from "./components/Footer.js";

function App() {
   const [user, setUser] = useState({
      _id: '',
      username: '',
      accessToken: '',
   });

   const login = (authData) => {
      setUser(authData);
   };


   return (
      <AuthContext.Provider value={{user, login}}>
         <div id="all">
            <Navigation username = {user.username} />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/logout" element={<Logout />} />
               <Route path="/about" element={<About />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/create-post" element={<CreatePost />} />
            </Routes>
            <Footer />
         </div>
      </AuthContext.Provider>
   );
}

export default App;
