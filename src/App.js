import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About"
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import {HashRouter, Route} from "react-router-dom";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App col text-light bg-dark">
      <Header/>
      <HashRouter>
         <Route exact path ="/" component={About}/>
         <Route exact path ="/portfolio" component={Portfolio}/>
         <Route exact path ="/contactMe" component={Contact}/>
         <Route exact path ="/resume" component={Resume}/>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
