/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import {AccordionPanel} from './AccordionPanel.js';
export class Accordion extends React.Component {

    render() {

        return (

                <div className="panel-group" id={this.props.id}>
                    {this.props.children}
                </div>

        )
    }
}
