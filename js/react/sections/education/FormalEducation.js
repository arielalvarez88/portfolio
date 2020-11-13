/*jshint esversion: 6 */
import React from 'react';
import {EducationItem} from '../../widgets/EducationItem.js';

export class FormalEducation extends React.Component {

    render (){
        return (<EducationItem title={this.props.title} iconName="diploma.svg">
            <ul>
                <li>
                    <span className="bold education-title">{this.props.degreeName}</span>
                    <br/>
                    {this.props.organization}
                    <br/>
                    {this.props.location}

                </li>

            </ul>
        </EducationItem>);
    }
};
