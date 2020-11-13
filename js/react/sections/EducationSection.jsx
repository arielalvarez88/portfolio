/*jshint esversion: 6 */

import React from 'react';
import {FormalEducation} from "./education/FormalEducation.js";

export class EducationSection extends React.Component {

    render() {

        return (
            <section id={this.props.id} className={"category sections-educationsection " + this.props.className}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="">Education</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 animation-element appear-from-left">
                            <FormalEducation title={"Undergraduate"} degreeName={"Telecommunications Engineer (2016)"} organization={"Georgia Tech"} location={"Online"}/>
                        </div>
                        <div className="col-md-6 animation-element appear-from-right">
                            <FormalEducation title={"Graduate"} degreeName={"Masters Computer Science specialization Machine Learning (Ongoing)"} organization={"Georgia Tech"} location={"Online"}/>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
