import About from "./components/About";
import Home from "./components/Home";
import Experience from './components/Experience'
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <SocialMedia />
     <About />
     <Portfolio />
     <Experience />
     <Contact />
    </div>
  )
}

export default App;
