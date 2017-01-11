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

                <div className="row">
                    <div className="col-md-4 bullet-box-container animation-element appear-from-left">
                        <BulletBox className="separated" headerCls="red" title="Okkralabs, San Jose, California" subText="Software Engineer, November 2013 – Present">
                            <li>
                                <div className="text">
                                    Developed web applications with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)
                                </div>
                                <hr/>
                            </li>

                            <li>
                                <div className="text">
                                    Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before.
                                </div>

                            </li>
                        </BulletBox>

                    </div>

                    <div className="col-md-4 bullet-box-container  animation-element appear">
                        <BulletBox className="separated" headerCls="red" title="Claro, Santo Domingo, Dominican Republic" subText="System Engineer Level 3, July 2012 – November 2013">
                            <li>
                                <div className="text">
                                    Developed web applications as a full stack developer for inventory management.

                                </div>

                                <hr/>
                            </li>

                            <li>

                                <div className="text">
                                    Developed web services for service activation, client charging and info request for different cell phone services.

                                </div>
                                <hr/>
                            </li>

                            <li>

                                <div className="text">
                                    Worked with really big Oracle databases. Used query optimization techniques to make queries faster.

                                </div>
                                <hr/>
                            </li>

                            <li>

                                <div className="text">
                                    Automated report generation, sending and storage.

                                </div>

                            </li>

                        </BulletBox>

                    </div>

                    <div className="col-md-4 bullet-box-container  animation-element appear-from-right">
                        <BulletBox className="separated" headerCls="red" title="5050MKT, Santiago, Dominican Republic" subText="Full Stack Developer, April 2011 – March2012">
                            <li>
                              <div className="text">
                                Developed web applications as a full stack developer using CMS using PHP, Mysql, Drupal and JQuery.
                              </div>

                            </li>
                        </BulletBox>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 bullet-box-container animation-element appear-from-left">
                        <BulletBox className="separated" headerCls="red" title="Intellisys, Santiago, Dominican Republic" subText="Scrum Team Member, November 2010– April 2011">
                            <li>
                                <div className="text">
                                    Develop web application noodle.org as a full stack developer using PHP, Mysql, Drupal, JQuery, Ruby Migrations, TeamCity.

                                </div>
                            </li>
                        </BulletBox>
                    </div>
                </div>

            </div>
        );
    }
}
