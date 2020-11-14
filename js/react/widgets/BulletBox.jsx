/*jshint esversion: 6 */

import React from 'react';
import PropTypes from "prop-types";
export class BulletBox extends React.Component{

  render(){

    return (
      <div className={"row widgets-bulletbox " + this.props.className}>
        <h3 className={this.props.headerCls}>
          {this.props.title}
          <p className="sub-text">{this.props.subText}</p>
        </h3>

        <ul>
          {this.props.bullets.map((bullet, idx)=>(
              <li key={idx}>
                  <div className="text">
                      {bullet.text}
                  </div>
                  {idx < this.props.bullets.length - 1 && <hr/>}
              </li>
          ))}
        </ul>
      </div>
    );

  }
}

BulletBox.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.node})),
  title:   PropTypes.string,
  className: PropTypes.string,
  headerClass: PropTypes.string,
  subText: PropTypes.string,
};
