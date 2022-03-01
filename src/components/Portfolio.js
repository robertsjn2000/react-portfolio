import React from "react";
import Project from "./Project"
import pwaPic from "../assets/images/pwaScreenshot.png";
import notePic from "../assets/images/note-taker.png";
import weatherPic from "../assets/images/weather-dashboard.png";
import bestPic from "../assets/images/best-friend.png";

const projects = [
    {
        title: "PWA Text Editor",
        img: pwaPic,
        deployedLink: "https://fast-retreat-91953.herokuapp.com/",
        repoLink: "https://github.com/robertsjn2000/pwa-text-editor"
    },
    {
        title: "Note Taker",
        img: notePic,
        deployedLink: "https://notetaker-jr-2000.herokuapp.com/",
        repoLink: "https://github.com/robertsjn2000/note_taker"
    },
    {
        title: "Weather Dashboard",
        img: weatherPic,
        deployedLink: "https://robertsjn2000.github.io/weather-dashboard/",
        repoLink: "https://github.com/robertsjn2000/weather-dashboard"
    },
    {
        title: "My New Best Friend App",
        img: bestPic,
        deployedLink: "https://robertsjn2000.github.io/my-new-best-friend/",
        repoLink: "https://github.com/robertsjn2000/my-new-best-friend"
    }
]


function Portfolio(){
    return(
        <div id="portfolio">
            {
                projects.map(project => (
                    <Project title={project.title} img={project.img} deployedLink={project.deployedLink} repoLink={project.repoLink}/>
                ))
            }
        </div>
    );
}

export default Portfolio;

// <Project title="PWA Text Editor" img="" deployedLink= "https://fast-retreat-91953.herokuapp.com/" repoLink="https://github.com/robertsjn2000/pwa-text-editor"/>
// <Project title="Note Taker" img="" deployedLink= "https://notetaker-jr-2000.herokuapp.com/" repoLink="https://github.com/robertsjn2000/note_taker"/>
// <Project title="My new Best Friend" img="" deployedLink= "https://lferrett.github.io/my-new-best-friend/" repoLink="https://github.com/robertsjn2000/my-new-best-friend"/>
// <Project title="Weather Dashboard" img="" deployedLink= "https://robertsjn2000.github.io/weather-dashboard/" repoLink="https://github.com/robertsjn2000/weather-dashboard"/>