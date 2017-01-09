/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class WebDevelopment extends React.Component {

  render (){
    return (<EducationItem title="Web Development" iconName="diploma.svg">
        <ul>

            <li>
                <span className="bold education-title">Introduction to bootstrap (2014)</span>
                <br/>
                Institution: <span className="bold">Microsoft (Via Edx)</span>

                <br/>
                Link:
                <a href="https://www.edx.org/course/introduction-bootstrap-tutorial-microsoft-dev203x-0">here.</a>
            </li>
            <li>
              <hr/>
                <span className="bold education-title">Angular JS: Get Started (2014)</span>
                <br/>
                Institution: <span className="bold">Pluralsight (by Scott Allen)</span>
                <br/>
                Link:
                <a href="http://www.pluralsight.com/courses/angularjs-get-started">here.</a>
            </li>

        </ul>

    </EducationItem>);
  }
};
