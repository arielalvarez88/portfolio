/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class EducationItem extends React.Component{

  render(){
    return (
      <div className={"widgets-educationitem row " + this.props.className}>
        <div className="col-md-4">
          <img src={"/img/icons/" + this.props.iconName} />
        </div>
        <div className="col-md-8">
          <h3 className="title">
            {this.props.title}
          </h3>
          <div className="text">
            {this.props.children}
          </div>
        </div>

      </div>

    );
  }

}
