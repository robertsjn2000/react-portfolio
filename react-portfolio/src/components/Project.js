import React from "react";


function Project(props){
    return(
        <div className="card col text-light bg-dark">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <img src={props.img} alt={props.title} style={{"width": "500px"}}/>
                <br />
                <a href={props.deployedLink}>Deployed App</a>
                <br /> 
                <a href={props.repoLink}>Repo Link</a>
            </div>
        </div>
    );
}

export default Project;
