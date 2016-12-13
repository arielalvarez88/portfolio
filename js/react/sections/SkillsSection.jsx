/*jshint esversion: 6 */

import React from 'react';
import {ThemeImage} from '../widgets/ThemeImage.js';
import ReactDOM from 'react-dom';

export class SkillsSection extends React.Component {

    render() {

        return (
          <div id={this.props.id} className="category sections-skillssection">
              <div className="section-header">
                  <h2 className="">Skills</h2>
              </div>

              <div className="row skill-section">

                <div className="col-md-3 col-sm-12">
                    <div className="col-sm-12">
                        <ThemeImage theme="machine-learning" class="theme-image"/>
                    </div>
                    <p className="col-sm-push-2 col-sm-8" >
                      Para que me quieras
                    </p>

                </div>

              </div>
          </div>
        );
    }
}
