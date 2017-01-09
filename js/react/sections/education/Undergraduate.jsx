/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class Undergraduate extends React.Component {

  render (){
    return (<EducationItem title="Undergradate" iconName="diploma.svg">
        <ul>
            <li>
                <span className="bold education-title">Telecommunications Engineer (2016)</span>
                <br/>
                Pontificia Universidad Católica Madre y Maestra (PUCMM)
                <br/>
                Santiago, Dominican Republic

            </li>

        </ul>
    </EducationItem>);
  }
};
