import React, { Component } from 'react';

import Panel from './Panel';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import CustomerListGroupItem from './CustomerListGroupItem';

import Schedules from '../services/Schedules';
import Customers from '../services/Customers';


const loyaltySchedules = [
  {"id": 1, "name": "Karla Angelito Loyola", "phone": "+56982646424", "dueDate": new Date(), "done": null},
  {"id": 2, "name": "Jesús Urrutia", "phone": "+56995999485", "dueDate": new Date(), "done": new Date()}
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onDoneClick = this.onDoneClick.bind(this);
    this.state = {
      customers: [],
      schedules: []
    };

    this.schedulesService = new Schedules('http://localhost:8003/schedules');
    this.customersService = new Schedules('http://localhost:8003/customers');
  }

  componentDidMount() {
    // -- Load schedules
    this.schedulesService.getList()
      .then((data) => this.setState({schedules: data}))
      .catch((err) => console.error(err))
    ;
    // -- Load customers
    this.customersService.getList()
      .then((data) => this.setState({customers: data}))
      .catch((err) => console.error(err))
    ;
  }

  onDoneClick(id) {
    let _this = this;
    this.setState(function (prevState) {
      return {
        schedules: prevState.schedules.map(function (item) {
          if (item.id === id) {
            let done = item.done ? null : new Date();
            _this.schedulesService.updateItem(id, {done: done})
              .catch((err) => console.error(err))
            ;
            return Object.assign({}, item, {done: done});
          } else {
            return item;
          }
        })
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Panel title="Customers">
              <ListGroup list={this.state.customers}
                itemComponent={CustomerListGroupItem} />
            </Panel>
          </div>

          <div className="col-md-6">
            <Panel title="Loyalty Schedules">
              <ListGroup list={this.state.schedules}
                onDoneClick={this.onDoneClick}
                itemComponent={ListGroupItem} />
            </Panel>
          </div>
        </div>

      </div>
    );
  }
}
