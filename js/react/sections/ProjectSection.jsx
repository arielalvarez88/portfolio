/*jshint esversion: 6 */

import React from 'react';
import {Accordion} from '../widgets/Accordion.js';
import {AccordionPanel} from '../widgets/AccordionPanel.js';
import ReactDOM from 'react-dom';

export class ProjectSection extends React.Component {

    render() {

        return (
            <section id={this.props.id} className="category sections-projectsection">
                <div className="container">
                    <div className="section-header">
                        <h2>Projects</h2>
                    </div>

                    <Accordion id="project-themes-small" className="animation-element appear">

                        <AccordionPanel theme="machine-learning" title="Machine Learning">
                            <div className="project">
                                <span className="bold">Movies rating predictor system -
                                </span>
                                Coded and designed system that predicts rating you will give based on similar movies you liked.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/MoviesRecomenderSystem" target="_blank">https://github.com/arielalvarez88/MoviesRecomenderSystem</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Python, Numpy, Pandas, Scikit Learn.
                            </div>

                            <div className="project">
                                <span className="bold">Self driving cab software -
                                </span>
                                Implemented Q-Learning system that learns how to drive in car simulation. 100% of travels to destination completed without accidents.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/SelfDrivingCab" target="_blank">https://github.com/arielalvarez88/SelfDrivingCab</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Python, Numpy, Pandas, Scikit Learn.
                            </div>

                            <div className="project">
                                <span className="bold">Clustering client segments -
                                </span>
                                Implemented Gaussian Mixture Model to find clusters representing client types.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/customer_segments" target="_blank">https://github.com/arielalvarez88/customer_segments</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Python, Numpy, Pandas, Scikit Learn.
                            </div>

                            <div className="project">
                                <span className="bold">Failing students predictor -
                                </span>
                                Implemented and Compared Naive Bayes, SVM and Decision Tree to classify students in risk of failing.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/UdacityStudentPrediction" target="_blank">https://github.com/arielalvarez88/UdacityStudentPrediction</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Python, Numpy, Pandas, Scikit Learn.
                            </div>

                            <div className="project">
                                <span className="bold">House price predictor -
                                </span>
                                Implemented linear regression to predict house prices.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/UdacityStudentPrediction" target="_blank">https://github.com/arielalvarez88/UdacityStudentPrediction</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Python, Numpy, Pandas, Scikit Learn.
                            </div>

                        </AccordionPanel>

                        <AccordionPanel theme="web-development" title="Web development">
                            <div className="project">
                                <span className="bold"> Meteor Fantasy Sport -
                                </span>
                                Developed front end for the front page: <a href={"https://www.ciom.tech/"}>https://www.ciom.tech/</a>, backend and front end of new product pricing module, and many other modules in this project which is about letting common people earn money by providing services of mystery shopper and product pricing reporting.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://www.ciom.tech/" target="_blank">https://www.ciom.tech/</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                ReactJS, Firebase/Firestore, MongoDB, NodeJS
                            </div>

                            <div className="project">
                                <span className="bold"> Meteor Fantasy Sport -
                                </span>
                                Developed backend and an administration web site to manage the content of a fantasy sports game. The backend calculates points for each player based on the results of real games of different sports, determine winners in order process
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://www.meteorfantasy.com" target="_blank">https://www.meteorfantasy.com/</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                ReactJS, Firebase/Firestore, MongoDB, NodeJS
                            </div>

                            <div className="project">
                                <span className="bold">Personal Portfolio -
                                </span>
                                HTML and CSS using Bootstrap and ReactJS.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="http://arielalvarez.info" target="_blank">http://arielalvarez.info</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                HTML and CSS using Bootstrap, ReactJS, Sass/Compass.
                            </div>

                            <div className="project">
                                <span className="bold">Disponibilidad Claro -
                                </span>
                                Coded and designed software architecture for cellphone inventory checking for clients. 5,000 visits a day (at my time in the company)
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://disponibilidad.claro.com.do/" target="_blank">https://disponibilidad.claro.com.do/</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                OracleDB 11g, JSP and servlets.
                            </div>

                            <div className="project">
                                <span className="bold">Disponibilidad Claro -
                                </span>
                                Coded and designed software architecture for cellphone inventory checking for clients. 5,000 visits a day (at my time in the company)
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://disponibilidad.claro.com.do/" target="_blank">https://disponibilidad.claro.com.do/</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                OracleDB 11g, JSP and servlets.
                            </div>

                            <div className="project">
                                <span className="bold">Propiedad Santiaguera -
                                </span>
                                Developed full webpage to sell properties. HTML, CSS and Backend in CodeIgniter.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/propiedadsantiaguera" target="_blank">https://github.com/arielalvarez88/propiedadsantiaguera</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                OracleDB 11g, JSP and servlets.
                            </div>

                            <div className="project">
                                <span className="bold">5050MKT -
                                </span>
                                Developed full webpage for publicity and web development company. Full stack with Drupal and JQuery.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="http://www.5050mkt.com/" target="_blank">http://www.5050mkt.com/</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Drupal (PHP), HTML, CSS, Javascript (JQuery), MySQL.
                            </div>

                            <div className="project">
                                <span className="bold">Yaque motors -
                                </span>
                                Developed full webpage for car selling company. Full stack with Drupal and JQuery.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/yaquemotors" target="_blank">https://github.com/arielalvarez88/yaquemotors</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Drupal (PHP), HTML, CSS, Javascript (JQuery), MySQL.
                            </div>

                            <div className="project">
                                <span className="bold">Herrera Checo -
                                </span>
                                Developed full webpage for construction company. Full stack with Drupal and JQuery.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="https://github.com/arielalvarez88/Herrera-Checo" target="_blank">https://github.com/arielalvarez88/Herrera-Checo</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Drupal (PHP), HTML, CSS, Javascript (JQuery), MySQL.
                            </div>

                            <div className="project">
                                <span className="bold">Nexustopia (in progress) -
                                </span>
                                Developing and designing as part of a team this project management webpage.
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                SockJS, IndexedDB, ExtJS, Javascript, Html, Sass (CSS).
                            </div>

                            <div className="project">
                                <span className="bold">Noodle -
                                </span>
                                Developed search with autocomplete, guess system and other sections as part of a team for this webpage for searching schools.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <a href="http://noodle.org" target="_blank">http://noodle.org</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                SockJS, IndexedDB, ExtJS, Javascript, Html, Sass (CSS).
                            </div>

                        </AccordionPanel>
                        <AccordionPanel theme="mobile-development" title="Mobile Development">
                            <div className="project">
                                <span className="bold">Quizmania: Fruits -
                                </span>
                                Coded and designed software architecture my Android casual game. 5,000 - 10,000 installs. 5 stars = 70%.
                                <br/>
                                <span className="bold">URLs:
                                </span>
                                <br/>
                                <a href="https://play.google.com/store/apps/details?id=com.quizmania.fruits" target="_blank">
                                    https://play.google.com/store/apps/details? id=com.quizmania.fruits</a>
                                <br/>
                                <a href="https://github.com/arielalvarez88/QuizManiaFruits" target="_blank">https://github.com/arielalvarez88/QuizManiaFruits</a>
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Android SDK.
                            </div>

                            <div className="project">
                                <span className="bold">Android app for restaurants (in progress) -
                                </span>
                                Developing and designing the data structures for compatibility system in restaurants.
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Android SDK, Firebase
                            </div>

                        </AccordionPanel>

                        <AccordionPanel theme="desktop-and-hardware" title="Desktop and Hardware">
                            <div className="project">
                                <span className="bold">Intelligent System for Firefighters (Capstone Project in College) -
                                </span>
                                Coded and designed the software for arduino and network communications for system that monitored firefighter's vital signs. A+ grade obtained.
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                C, C#
                            </div>

                            <div className="project">
                                <span className="bold">Online Pong Game -
                                </span>
                                Coded and designed software for online multiplayer pong game.
                                <br/>
                                <span className="bold">Technologies:
                                </span>
                                Java SE 6
                            </div>

                            <div className="project">
                                <span className="bold">(See also Machine Learning projects)</span>

                            </div>
                        </AccordionPanel>

                    </Accordion>

                </div>
            </section>
        );
    }
}
