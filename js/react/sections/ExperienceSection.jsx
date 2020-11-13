/*jshint esversion: 6 */

import React from 'react';
import {BulletBox} from '../widgets/BulletBox.js';

export class ExperienceSection extends React.Component {

    render() {

        return (
            <section id={this.props.id} className={"category sections-experiencesection " + this.props.className}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="">Experience</h2>
                    </div>

                    <div className="row">
                            <BulletBox
                                className="separated col-md-4 bullet-box-container animation-element appear-from-left"
                                headerCls="red"
                                title="Okkralabs, San Jose, California"
                                subText="Software Engineer, November 2013 – Present"
                                bullets={[
                                    {text: "Developed web application with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)"},
                                    {text: "Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before."}
                                ]}
                            />

                            <BulletBox
                                className="separated col-md-4 bullet-box-container animation-element appear-from-left"
                                headerCls="red"
                                title="Okkralabs, San Jose, California"
                                subText="Software Engineer, November 2013 – Present"
                                bullets={[
                                    {text: "Developed web application with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)"},
                                    {text: "Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before."}
                                ]}
                            />



                            <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear" headerCls="red" title="Claro, Santo Domingo, Dominican Republic" subText="System Engineer Level 3, July 2012 – November 2013"
                                       bullets={[
                                           {text: "Developed web applications as a full stack developer for inventory management."},
                                           {text: "Developed web services for service activation, client charging and info request for different cell phone services."},
                                           {text: "Worked with really big Oracle databases. Used query optimization techniques to make queries faster."},
                                           {text: "Automated report generation, sending and storage."}
                                       ]}
                            />


                            <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear-from-right" headerCls="red" title="5050MKT, Santiago, Dominican Republic" subText="Full Stack Developer, April 2011 – March2012"
                                       bullets={[
                                           {text: "Developed web applications as a full stack developer using CMS using PHP, Mysql, Drupal and JQuery."},
                                       ]}
                            />
                    </div>

                    <div className="row">

                            <BulletBox className="separated col-md-4 bullet-box-container animation-element appear-from-left" headerCls="red" title="Intellisys, Santiago, Dominican Republic" subText="Scrum Team Member, November 2010– April 2011"
                                       bullets={[
                                           {text: "Develop web application noodle.org as a full stack developer using PHP, Mysql, Drupal, JQuery, Ruby Migrations, TeamCity."},
                                       ]}
                            />
                    </div>

                </div>
            </section>
        );
    }
}
