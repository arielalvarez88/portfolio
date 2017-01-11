/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class Mobile extends React.Component {

  render (){
    return (<EducationItem title="Mobile" iconName="diploma.svg">
        <ul>
            <li>
                <span className="bold education-title">Developing Android Apps (2016)</span>
                <br/>
                  Institution: Google (Via Udacity )
                <br/>
                  Link: <a href="https://classroom.udacity.com/courses/ud853" target="_blank">https://classroom.udacity.com/courses/ud853</a>

            </li>

        </ul>
    </EducationItem>);
  }
};
