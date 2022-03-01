import React from "react";
import {Link} from "react-router-dom"

// function Navigation(){
//     return(
//         <div>
//             <ul className="nav navbar-nav navbar-right">
//                 <li className="nav-item">
//                     <Link to="/" className="nav-link">About Me</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/portfolio" className="nav-link">Portfolio</Link>
//                 </li>
//                 <li className="nav-item">
//                     <a href="https://docs.google.com/document/d/1cdxtch8rGiM-hXh1ZJYld5mzGSWA4GpBjMWkod1iL1g/edit?usp=sharing" className="nav-link">Resume</a>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/contactMe" className="nav-link">Contact Me</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default Navigation;

// import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://docs.google.com/document/d/1cdxtch8rGiM-hXh1ZJYld5mzGSWA4GpBjMWkod1iL1g/edit?usp=sharing"
        //   onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;