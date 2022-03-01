import React from "react";


function Navigation(){
    return(
        <div>
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <a href="/" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="/portfolio" className="nav-link">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="https://docs.google.com/document/d/1cdxtch8rGiM-hXh1ZJYld5mzGSWA4GpBjMWkod1iL1g/edit?usp=sharing" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="/contactMe" className="nav-link">Contact Me</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
