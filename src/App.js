import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Works from "./sections/Works";
import "./styles/App.scss"


function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Works />
            <Contact />
        </div>
    );
}

export default App;
