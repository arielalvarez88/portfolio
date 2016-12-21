/*jshint esversion: 6 */

import React from 'react';
import {ThemeImage} from '../widgets/ThemeImage.js';
import ReactDOM from 'react-dom';
import {BulletBox} from '../widgets/BulletBox.js';

export class ExperienceSection extends React.Component {

    render() {

        return (
            <div id={this.props.id} className={"category sections-experiencesection row " + this.props.className}>


              <div className="section-header">
                      <h2 className="">Experience</h2>
              </div>

              <div className="container">



                <div className="col-md-3 bullet-box-container">
                  <BulletBox headerCls="red" title="Okkralabs, San Jose, California <br/> Software Engineer, November 2013 – Present">
                    <li>
                      Developed web applications with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)

                    </li>

                    <li>
                      Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before.

                    </li>
                  </BulletBox>

                </div>

                <div className="col-md-3 bullet-box-container">
                  <BulletBox headerCls="red" title="Okkralabs, San Jose, California <br/> Software Engineer, November 2013 – Present">
                    <li>
                      Developed web applications with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)

                    </li>

                    <li>
                      Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before.

                    </li>
                  </BulletBox>

                </div>

              </div>

            </div>
        );
    }
}
