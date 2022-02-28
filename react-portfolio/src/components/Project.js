import React from "react";


function Project(props){
    return(
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <img src="{props.img}" alt="{props.title}"/>
                <br />
                <a href="{props.deployedLink}">Deployed App</a>
                <br /> 
                <a href="{props.repoLink}">Repo Link</a>
            </div>
        </div>
    );
}

export default Project;
