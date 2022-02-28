import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About"
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
         <Route exact path ="/" element={<About/>}></Route>
         <Route exact path ="/portfolio" element={<Portfolio/>}></Route>
         <Route exact path ="/contactMe" element={<Contact/>}></Route>
         <Route exact path ="/resume" element={<Resume/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
