import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <div>
            <nav className= "navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className= "navbar-brand" href="#">
                            John Roberts
                        </a> 
                    </div>
                    <Navigation/>
                </div>
            </nav>
        </div>
    );
};
export default Header;
