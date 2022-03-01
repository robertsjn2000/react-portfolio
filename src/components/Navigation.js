import React from "react";
import {Link} from "react-router-dom"

function Navigation(){
    return(
        <div>
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <Link href="/" className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link href="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <a href="https://docs.google.com/document/d/1cdxtch8rGiM-hXh1ZJYld5mzGSWA4GpBjMWkod1iL1g/edit?usp=sharing" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <Link href="/contactMe" className="nav-link">Contact Me</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
