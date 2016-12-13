/*jshint esversion: 6 */
require("bootstrap");
import React from 'react';
import ReactDOM from 'react-dom';
import {ProjectSection} from './sections/ProjectSection.js';
import {SkillsSection} from './sections/SkillsSection.js';
import {InfoSection} from './sections/InfoSection.js';

var pageTpl = (
<div>
    <InfoSection id="section-info"/>
    <SkillsSection id="section-skills"/>
    <ProjectSection id="section-projects"/>
</div>

);

ReactDOM.render(pageTpl,document.getElementById("jsx-app"));
