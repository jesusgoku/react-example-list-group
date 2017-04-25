import React, { Component } from 'react';

export default class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {list: props.list};
  }

  render() {
    let ListGroupItem = this.props.itemComponent;
    return (
      <div className="list-group">
        {this.props.list.map((item) =>
          <ListGroupItem data={item} onDoneClick={this.props.onDoneClick} key={item.id.toString()} />
        )}
      </div>
    );
  }
}
