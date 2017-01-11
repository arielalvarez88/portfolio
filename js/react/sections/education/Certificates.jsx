/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class Certificates extends React.Component {

  render (){
    return (<EducationItem title="Certificates/Nanodegree" iconName="diploma.svg">
        <ul>
            <li>
                <span className="bold education-title">Machine Learning Engineering Nanodegree</span>
                <br/>
                Issued by :
                <span className="bold">Udacity</span>
                <br/>
                Nanodegree Link:
                <a href="https://classroom.udacity.com/nanodegrees/nd009/syllabus" target="_blank">here.</a>
                <br/>
                Certificate link:
                <a href="/files/nd-cert.pdf" target="_blank">here.</a>
            </li>

            <li>
                <hr/>
                <span className="bold education-title">Oracle Certified Professional - Java SE 6 Programmer (2013)</span>
                <br/>
                Issued by: <span className="bold">Oracle</span>
                <br/>
                Certificate/Badge: <a href="https://www.youracclaim.com/badges/8b777dc4-091c-431e-80f0-f1823d0efea9" target="_blank">here.</a>
                <br/>
                Details: Grade: 96%. Oracle Testing ID: OC1249983.
            </li>

        </ul>
    </EducationItem>);
  }
};
