/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../widgets/EducationItem.js';
import {Undergraduate} from './education/Undergraduate.js';
import {Certificates} from './education/Certificates.js';
import {MachineLearning} from './education/MachineLearning.js';
import {DesktopAndHardware} from './education/DesktopAndHardware.js';
import {WebDevelopment} from './education/WebDevelopment.js';


import {Mobile} from './education/Mobile.js';


export class EducationSection extends React.Component {

    render() {

        return (
            <div id={this.props.id} className={"category sections-educationsection row " + this.props.className}>

                <div className="section-header">
                    <h2 className="">Education</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                      <Undergraduate/>
                    </div>
                    <div className="col-md-6">
                        <MachineLearning/>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">

                        <WebDevelopment/>
                    </div>
                    <div className="col-md-6">
                      <Mobile/>
                    </div>

                </div>

                <div className="row">


                    <div className="col-md-6">
                        <DesktopAndHardware/>
                    </div>
                </div>

            </div>
        );
    }
}
