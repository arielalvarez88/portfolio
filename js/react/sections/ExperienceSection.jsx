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
                            <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear-from-left" headerCls="red" title="Serprosurca" subText="Full Stack Web Developer, Nov 2019 - Present"
                                       bullets={[
                                           {text: "Duties: Work with a team to design a product and develop the web components for the company’s main product CIOM."},
                                           {text: (<span>Sample Projects: Ciom - Developed front end for the front page: https://www.ciom.tech/, backend and front end of new product pricing module, and many other modules in this project which is about letting common people earn money by providing services of mystery shopper and product pricing reporting. Technologies: React JS, Node JS, MongoDB
                                                    Urls: <a href={"https://www.ciom.tech"}>https://www.ciom.tech/</a></span>)}]}
                            />
                            <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear" headerCls="red" title="Bairesdev" subText="NodeJS Full Stack Engineer, March 2019 – November 2019"
                                       bullets={[
                                           {text: "Work with clients from USA, mainly as a web developer but also helping them to create the road map of the products."},
                                           {text: (<span>Sample Projects: Meteor Fantasy Sport - Developed backend and an administration web site to manage the content of a fantasy sports game. The backend calculates points for each player based on the results of real games of different sports, determine winners in order process payments. Technologies: Node JS, React JS, Firebase/Firestore.
                                                   Urls: <a href="https://www.meteorfantasy.com/">https://www.meteorfantasy.com/</a></span>)}]}
                            />

                            <BulletBox
                                className="separated col-md-4 bullet-box-container animation-element appear-from-right"
                                headerCls="red"
                                title="Okkralabs, San Jose, California"
                                subText="Software Engineer, November 2013 – March 2019"
                                bullets={[
                                    {text: "Developed web application with latest web technologies (JS, IndexedDB, WebSockets, Rabbitmq)"},
                                    {text: "Increased quality and client satisfaction by introducing Scrum methodology to team. Worked as Scrum Master and implemented metrics gathering and reporting that didn’t exist before."}
                                ]}
                            />

                    </div>
                    <div className="row">
                        <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear-from-left" headerCls="red" title="Claro, Santo Domingo, Dominican Republic" subText="System Engineer Level 3, July 2012 – November 2013"
                                   bullets={[
                                       {text: "Developed web applications as a full stack developer for inventory management."},
                                       {text: "Developed web services for service activation, client charging and info request for different cell phone services."},
                                       {text: "Worked with really big Oracle databases. Used query optimization techniques to make queries faster."},
                                       {text: "Automated report generation, sending and storage."}
                                   ]}
                        />


                        <BulletBox className="separated col-md-4 bullet-box-container  animation-element appear" headerCls="red" title="5050MKT, Santiago, Dominican Republic" subText="Full Stack Developer, April 2011 – March2012"
                                   bullets={[
                                       {text: "Developed web applications as a full stack developer using CMS using PHP, Mysql, Drupal and JQuery."},
                                   ]}
                        />
                    </div>
                </div>
            </section>
        );
    }
}
