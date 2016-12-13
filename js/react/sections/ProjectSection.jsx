/*jshint esversion: 6 */

import React from 'react';
import {Accordion} from '../widgets/Accordion.js';
import {AccordionPanel} from '../widgets/AccordionPanel.js';
import ReactDOM from 'react-dom';

export class ProjectSection extends React.Component {

    render() {

        return (
            <div id={this.props.id} className="category row">
                <div className="section-header">
                    <h2>Projects</h2>
                </div>

                <Accordion id="project-themes-small">

                  <AccordionPanel theme="machine-learning" title="Machine Learning" content="abune1"/>
                  <AccordionPanel theme="web-development" title="Web development" content="abune2"/>
                  <AccordionPanel theme="mobile-development" title="Mobile Development" content="abune3"/>
                  <AccordionPanel theme="desktop-and-hardware" title="Desktop and Hardware" content="abune4"/>

                </Accordion>
            </div>
        );
    }
}
