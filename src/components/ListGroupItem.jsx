import React, { Component } from 'react';

export default class ListGroupItem extends Component {
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
      <div className="list-group-item">
        <span className="label label-info">
          <i className="fa fa-calendar"></i>
          &nbsp;
          {Intl.DateTimeFormat().format(new Date(data.dueDate))}
        </span>
        &nbsp;
        <i className="fa fa-user"></i>
        &nbsp;
        {data.name}
        &nbsp;
        <code>
          <i className="fa fa-phone"></i>
          &nbsp;
          {data.phone}
        </code>
        <button className="btn btn-xs btn-success pull-right" onClick={this.onDoneClick(data.id)}>
          done
          &nbsp;
          <i className={'fa fa-' + (data.done ? 'check-square-o' : 'square-o')}></i>
        </button>
      </div>
    );
  }
}
