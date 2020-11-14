import React, {useEffect, useState, useCallback} from "react";
import {BootstrapSizes} from "../constants/sizes.js";
export const Navbar = ()=>{
    const [smallResolution, setSmallResolution] = useState(window.innerWidth < BootstrapSizes.MEDIUM);
    const resizeHandler = useCallback(()=>{
        const nowSmallResolution = window.innerWidth < BootstrapSizes.MEDIUM;
        if (nowSmallResolution !== smallResolution){
            setSmallResolution(nowSmallResolution);
        }
    },[smallResolution]);
    useEffect(()=>{
        window.addEventListener("resize", resizeHandler);
        return ()=>window.removeEventListener("resize", resizeHandler)
    });

   return (<nav className="navbar navbar-default navbar-fixed-top" role="navigation" id="principal-navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Ariel's Portfolio</a>
            </div>


            {/*Collect the nav links, forms, and other content for toggling*/}
            <div className="collapse navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav navbar-right" {...(smallResolution? {"data-toggle": "collapse", "data-target":"#navbar"}:{})} >
                    <li className="active"><a href="#section-infosection">Info</a></li>
                    <li><a href="#section-skillssection">Skills</a></li>
                    <li><a href="#section-projectssection">Projects</a></li>
                    <li><a href="#section-experiencesection">Experience</a></li>
                    <li><a href="#section-educationsection">Education</a></li>
                    <li><a href="#section-certificationssection">Certifications</a></li>
                    <li><a href="#section-congressessection">Congresses and workshops</a></li>
                    <li><a href="#section-coursessection">Courses taken</a></li>

                </ul>
            </div>
            {/* /.navbar-collapse */}


        </div>
    </nav>);
};
