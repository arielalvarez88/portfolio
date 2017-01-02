/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../widgets/EducationItem.js';

export class EducationSection extends React.Component {

    render() {

        return (
            <div id={this.props.id} className={"category sections-educationsection row " + this.props.className}>

                <div className="section-header">
                    <h2 className="">Education</h2>
                </div>

                <div className="row">
                </div>
            </div>
        );
    }
}
