import { Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

   return (
      <div id="all">
         <Navigation />
         
         <Route path="/" exact component={Home} />

         <Route path="/about" component={About} />

         <Route path="/portfolio" component={Portfolio} />

         <Route path="/blog" component={Blog} />

         <Route path="/contact" component={Contact} />

         <Footer />
      </div>
   );
}

export default App;
