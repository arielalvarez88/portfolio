/*jshint esversion: 6 */

import React from 'react';
import {ThemeImage} from '../widgets/ThemeImage.js';
import ReactDOM from 'react-dom';
import {BulletBox} from '../widgets/BulletBox.js';
import {EducationItem} from '../widgets/EducationItem.js';
import {Certificates} from './education/Certificates.js';
import {MachineLearning} from './education/MachineLearning.js';
import {DesktopAndHardware} from './education/DesktopAndHardware.js';
import {Mobile} from './education/Mobile.js';
import {WebDevelopment} from './education/WebDevelopment.js';

export class Courses extends React.Component {

    render() {

        return (
            <div id={this.props.id} className={"category sections-coursesssection row " + this.props.className}>

                <div className="section-header">
                    <h2 className="">Courses</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 animation-element appear-from-left">

                        <WebDevelopment/>
                        <Mobile/>
                    </div>

                    <div className="col-md-6 animation-element appear-from-right">
                        <MachineLearning/>
                        <DesktopAndHardware/>
                    </div>


                </div>

                


            </div>
        );
    }
}
