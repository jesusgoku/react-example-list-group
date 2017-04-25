import React, { Component } from 'react';

export default class Panel extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">{this.props.title}</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
