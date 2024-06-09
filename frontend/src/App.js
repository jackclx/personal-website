import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Hobby } from "./components/Hobby";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Work />
      <Projects />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
