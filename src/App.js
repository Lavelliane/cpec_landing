import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import { WhyCpE } from "./components/WhyCpE";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <WhyCpE />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
