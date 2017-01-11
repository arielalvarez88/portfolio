/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {EducationItem} from '../../widgets/EducationItem.js';

export class DesktopAndHardware extends React.Component {

  render (){
    return (<EducationItem title="Desktop and Hardware" iconName="diploma.svg">

        <ul>

            <li>
                <span className="bold education-title">Python for Everybody (2015)</span>
                <br/>
                Institution: <span className="bold">University of Michigan (Via Coursera)</span>
                <br/>
                Link: <a href="https://www.coursera.org/learn/python" target="_blank">here.</a>
            </li>
            <li>
              <hr/>
                <span className="bold education-title">Cisco CCNA Training (2009)</span>

                <br/>
                Institution: <span className="bold">Softmatica</span>
                <br/>
                Place: Santiago, Dominican Republic
                <br/>
                Link: <a href="http://softmatica.edu.do/softmatica/" target="_blank">http://softmatica.edu.do/softmatica/</a>
            </li>

            <li>
              <hr/>
                <span className="bold education-title">GNU/Linux Administration (2008)</span>
                <br/>
                Institution: <span className="bold">Fundación Código Libre</span>
                <br/>
                Place: Santiago, Dominican Republic
                <br/>
                Link:                <a href="http://www.codigolibre.org/" className="test" target="_blank">
                    http://www.codigolibre.org/
                </a>
            </li>
        </ul>

    </EducationItem>);
  }
};
