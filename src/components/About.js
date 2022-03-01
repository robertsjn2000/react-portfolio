import React from "react";


function About() {
    return (
        <div className="container pb-5 pt-5 mb-5 text-light bg-dark" id="aboutMe">
            <h1>About me</h1>
            <p>
                John Roberts is a 21 year old aspiring full stack web developer. He is also in the process of being
                certified as a private pilot. His other hobbies include golfing, excercising, and cooking. He also
                enjoys video games and television. He hopes to enjoy a career in web development.
            </p>
            <p style={{"margin-bottom": "325px"}}>
                He is currently training to become a full-stack web developer and is already grounded in several
                skills including HTML, CSS, JavaScript, Web API's, MongoDB, React, and SQL.
            </p>
        </div>
    );
}

export default About;
