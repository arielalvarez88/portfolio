/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../widgets/EducationItem.js';
import {Undergraduate} from './education/Undergraduate.js';

import {Mobile} from './education/Mobile.js';

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
                            <Undergraduate/>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
