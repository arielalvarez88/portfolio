/*jshint esversion: 6 */
require("bootstrap");
import React from 'react';
import ReactDOM from 'react-dom';
import {ProjectSection} from './sections/ProjectSection.js';
import {SkillsSection} from './sections/SkillsSection.js';
import {InfoSection} from './sections/InfoSection.js';
import {ExperienceSection} from './sections/ExperienceSection.js';
import {EducationSection} from './sections/EducationSection.js';
import {Certifications} from './sections/Certifications.js';
import {CoursesSection} from './sections/CoursesSection.js';
import {CongressesSection} from './sections/CongressesSection.js';

var pageTpl = (
<div>

    <div className="black-screen"></div>
    <InfoSection id="section-infosection" className="first-section"/>
    <SkillsSection id="section-skillssection"/>
    <ProjectSection id="section-projectssection"/>
    <ExperienceSection id="section-experiencesection"/>
    <EducationSection id="section-educationsection"/>
    <Certifications id="section-certificationssection"/>
    <CongressesSection id="section-congressessection" />
    <CoursesSection id="section-coursessection" className="last-section"/>

</div>

);

ReactDOM.render(pageTpl,document.getElementById("jsx-app"));
