/*jshint esversion: 6 */

import React from 'react';
import {ThemeImage} from '../widgets/ThemeImage.js';
import ReactDOM from 'react-dom';
import {SkillItem} from '../widgets/SkillItem.js';

export class SkillsSection extends React.Component {

    render() {

        return (
            <section id={this.props.id} className="category sections-skillssection">

                <div className="container">
                    <div className="section-header">
                        <h2 className="" id="section-skillssection-header">Skills</h2>
                    </div>

                    <div className="row skill-section">

                        <div className="animation-element appear-from-left col-md-6 row">
                            <div className="col-md-6">
                                <SkillItem title="Programming languages and techonologies" img="programming-languages">
                                    <ul>
                                        <li>Javascript (advanced)</li>
                                        <li>Java (advanced)</li>
                                        <li>Python (begginer)</li>
                                        <li>PHP (begginer, I was good a long time ago.)</li>
                                        <li>Advanced Messaging Queuing Protocol (AMQP) (intermediate)</li>
                                    </ul>
                                </SkillItem>
                            </div>

                            <div className="col-md-6">
                                <SkillItem title="Software Design" img="software-design">
                                    <ul>
                                        <li>Design Patterns (advanced)</li>
                                        <li>Clean Code (advanced)</li>
                                        <li>Algorithms (intermediate)</li>

                                    </ul>
                                </SkillItem>
                            </div>

                        </div>

                        <div className="animation-element appear-from-right col-md-6 row">
                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="Web Development" img="web-development">
                                    <ul>
                                        <li>Angular JS 1 and 2 (begginer)</li>
                                        <li>IndexedDB (intermediate)</li>
                                        <li>ReactJS (intermediate)</li>
                                        <li>JavaEE (intermediate)</li>
                                        <li>Websockets (intermediate)</li>
                                        <li>JQuery (advanced)</li>
                                        <li>IndexedDB (intermediate)</li>
                                        <li>ExtJS (advanced)</li>
                                        <li>Firebase (beginner)</li>
                                        <li>Bootstrap (intermediate)</li>
                                        <li>Sass (intermediate)</li>

                                    </ul>
                                </SkillItem>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="Mobile Development" img="mobile-development">
                                    <ul>
                                        <li>Android SDK</li>
                                    </ul>
                                </SkillItem>
                            </div>
                        </div>
                    </div>

                    <div className="row skill-section">
                        <div className="animation-element appear-from-left col-md-6 row">
                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="Machine Learning" img="machine-learning">
                                    <ul>
                                        <li>Scikit Learn (intermediate)</li>
                                        <li>Pandas (intermediate)</li>
                                        <li>Numpy (intermediate)</li>
                                        <li>Neural Networks (beginner)</li>
                                        <li>Linear Regression (advanced)</li>
                                        <li>Gradient Descent (advanced)</li>
                                        <li>Logistic Regression (beginner)</li>
                                        <li>Solving High Bias and High Variance (beginner)</li>
                                        <li>SVM (beginner)</li>
                                        <li>Clustering(K-means, Gaussian Mixture Model) (beginner)</li>
                                        <li>PCA (beginner)</li>
                                        <li>Anomaly Detection (beginner)</li>
                                        <li>OCR (Optical Character Recognition) (beginner)</li>

                                    </ul>
                                </SkillItem>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="Version Control System" img="version-control">
                                    <ul>
                                        <li>Git (advanced)</li>
                                    </ul>
                                </SkillItem>
                            </div>
                        </div>

                        <div className="animation-element appear-from-right col-md-6 row">

                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="Databases" img="database">
                                    <ul>
                                        <li>Oracle (intermediate)</li>
                                        <li>Mysql (intermediate)</li>
                                        <li>Firebase (beginner)</li>
                                        <li>MongoDB (beginner)</li>
                                    </ul>
                                </SkillItem>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <SkillItem title="OS and tools" img="tools">
                                    <ul>
                                        <li>Linux (intermediate)</li>
                                        <li>Octave (begginer)</li>
                                        <li>Android Studio (beginner)</li>
                                        <li>Eclipse (intermediate)</li>
                                        <li>Webstorm (begginer)</li>
                                    </ul>
                                </SkillItem>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
