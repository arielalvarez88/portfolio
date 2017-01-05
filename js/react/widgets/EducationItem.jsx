/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class EducationItem extends React.Component{

  render(){
    return (
      <div className={"widgets-educationitem row " + this.props.className}>

        <div className="widget-row row">

          <div className="col-xs-2">
            <img src={"/img/icons/" + this.props.iconName} />
          </div>
          <div className="col-xs-10">
            <h3 className="title">
              {this.props.title}
            </h3>

          </div>

        </div>

        <div className="widget-row row">

          <div className="col-xs-2">
          </div>

          <div className="col-xs-10">
            <div className="text">
              {this.props.children}
            </div>
          </div>

        </div>

      </div>

    );
  }

}
