/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class MachineLearning extends React.Component {

  render (){
    return (<EducationItem title="Machine Learning" iconName="diploma.svg">
        <ul>
            <li>
                <span className="bold education-title">Linear Algebra (2016)</span>
                <br/>
                Institution: <span className="bold">Udacity</span>
                <br/>
                Link:
                <a href="https://classroom.udacity.com/courses/ud953">here</a>

            </li>

            <li>
                <hr/>
                <span className="bold education-title">Machine Learning Course (2015)</span>
                <br/>
                Institution: <span className="bold">Stanford University (Via Coursera)</span>
                <br/>
                Link:
                <a href="https://www.coursera.org/learn/machine-learning">here</a>

            </li>

        </ul>
    </EducationItem>);
  }
};
