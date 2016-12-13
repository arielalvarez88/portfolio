/*jshint esversion: 6 */

import React from 'react';
import {Accordion} from '../widgets/Accordion.js';
import {AccordionPanel} from '../widgets/AccordionPanel.js';
import ReactDOM from 'react-dom';

export class ThemeImage extends React.Component {

    render() {

        return (
          <img className={"theme-image "+ this.props.className} src={"/img/widgets/themes/small/" + this.props.theme + ".svg" }/>
        );
    }
}
