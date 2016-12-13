/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class AccordionPanel extends React.Component{

  render(){

    return (

    <div className="panel panel-default accordion-panel">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a className="title-link" data-toggle="collapse" data-parent="#project-themes" href={"#theme-" + this.props.theme}>
            <div>
              <img className="accordion-panel-logo" src={"/img/widgets/themes/small/" + this.props.theme + ".svg" }/>
            </div>

            <div>
              <span className="accordion-panel-title-text">{this.props.title}</span>
            </div>

          </a>
        </h4>
      </div>
      <div id={"theme-" + this.props.theme} className="panel-collapse collapse">
        <div className="panel-body">
            {this.props.content}
        </div>
      </div>
    </div>

    );

  }


}
