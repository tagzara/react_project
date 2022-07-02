import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Homepage/Home.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

   return (
      <div id="all">
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
