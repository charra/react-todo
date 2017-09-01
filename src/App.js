import React, { Component } from 'react';
import './App.css';
import Input from './input';
import List from './list';

class App extends Component {
  constructor() {
    super();
    this.state = {dataItems: []};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }
  handleFormSubmit(item) {
		this.setState({
      dataItems:[...this.state.dataItems, item]
    });
  }
  updateItems(itemIndex) {
    let newDataItems = this.state.dataItems.filter((item, index) => index !== itemIndex);
    this.setState({
      dataItems: newDataItems
    });
  }
  render() {
    return (
      <div>
        <List onRemoveItem={this.updateItems} dataItems={this.state.dataItems}/>
        <Input onFormSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default App;
