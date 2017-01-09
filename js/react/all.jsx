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
import {Courses} from './sections/Courses.js';

var pageTpl = (
<div>
    <InfoSection id="section-infosection"/>
    <SkillsSection id="section-skillssection"/>
    <ProjectSection id="section-projectssection"/>
    <ExperienceSection id="section-experiencesection"/>
    <EducationSection id="section-educationsection"/>
    <Certifications id="section-certificationssection"/>
    <Courses id="section-coursessection"/>
</div>

);

ReactDOM.render(pageTpl,document.getElementById("jsx-app"));
