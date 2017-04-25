import React, { Component } from 'react';

export default class CustomerListGroupItem extends Component {
  constructor(props) {
    super(props)
    this.onDoneClick = this.onDoneClick.bind(this);
  }

  onDoneClick(id) {
    return (e) => {this.props.onDoneClick(id)}
  }

  render() {
    let data = this.props.data;
    return (
      <a href="#" className="list-group-item">
        <i className="fa fa-user"></i>
        &nbsp;
        {data.name}
      </a>
    );
  }
}
