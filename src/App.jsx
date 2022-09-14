import logo from './logo.svg';
import mygf from './images/my-gf.jpeg'
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {

  let myGfName = "poe";
  

  return <>

    <Header />
      <Home />
      <About />
      <Services />
      <Contact />
    <Footer />
  </>;
}

export default App;
