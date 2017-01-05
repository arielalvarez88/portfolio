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
                    <div className="col-md-6">
                      <EducationItem title="Undergradate" iconName="diploma.svg">
                          <ul>
                            <li>
                              <span className="bold education-title">Telecommunications Engineer</span>
                              <br/>
                              Pontificia Universidad Católica Madre y Maestra (PUCMM)
                              <br/>
                              Santiago, Dominican Republic

                            </li>

                          </ul>
                      </EducationItem>
                    </div>
                    <div className="col-md-6">
                      <EducationItem title="Test1"  iconName="diploma.svg">
                          Test2
                      </EducationItem>
                    </div>

                </div>
            </div>
        );
    }
}
