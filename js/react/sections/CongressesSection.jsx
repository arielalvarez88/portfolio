/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../widgets/EducationItem.js';

import {Mobile} from './education/Mobile.js';

export class CongressesSection extends React.Component {

    render() {

        return (
            <section id={this.props.id} className={"category sections-congressessection " + this.props.className}>

                <div className="container">
                    <div className="section-header">
                        <h2 className="">Congresses and Workshops</h2>
                    </div>

                    <div className="row animation-element appear">
                        <div className="col-xs-12">
                            <EducationItem title="All" iconName="lecture.svg">

                                <ul>
                                    <li>
                                        <span className="bold education-title">PyCaribbean (2016)</span>
                                        <br/>
                                        Place: Santo Domingo, Dominican Republic
                                        <br/>
                                        Description: International congress about the latest Python technologies and newest tendencies in the software industry.
                                        <br/>
                                        Link: <a href="http://pycaribbean.com/" target="_blank">here.</a>
                                    </li>

                                    <li>
                                        <hr/>
                                        <span className="bold education-title">JS.do Understanding Asynchrony (June 2016)</span>
                                        <br/>
                                        Place: Santo Domingo, Dominican Republic
                                        <br/>
                                        Description: Javascript workshop by the JS.do community. Good practices for working with promises, callbacks, understanding event loop, etc.
                                    </li>

                                </ul>

                            </EducationItem>

                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
