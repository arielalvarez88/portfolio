/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export class BulletBox extends React.Component{

  render(){

    return (
      <div className={"row widgets-bulletbox " + this.props.className}>
        <h3 className={this.props.headerCls}>{this.props.title}</h3>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );

  }
}
