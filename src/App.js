import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About"
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
// import {HashRouter, Route} from "react-router-dom";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

// function App() {
//   return (
//     <div className="App col text-light bg-dark">
//       <Header/>
//       <HashRouter>
//          <Route exact path ="/" component={About}/>
//          <Route exact path ="/portfolio" component={Portfolio}/>
//          <Route exact path ="/contactMe" component={Contact}/>
//          <Route exact path ="/resume" component={Resume}/>
//       </HashRouter>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navigation from './components/Navigation';
// import Home from './pages/Home';  
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and 
      the function to update it */}
      <Header/>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;