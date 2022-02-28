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
                    <a href="/resume" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="/contactMe" className="nav-link">Contact Me</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
