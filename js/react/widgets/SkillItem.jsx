import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeImage} from './ThemeImage.js';

export class SkillItem extends React.Component{

  render (){
    return (<div className="widgets-skillitem row">
      <ThemeImage theme={this.props.img}/>
      <h3 className="col-xs-12">{this.props.title}</h3>
      <hr className="col-xs-6 col-xs-push-3"/>
      <p className="col-xs-12">{this.props.children}</p>
    </div>);
  }
}
