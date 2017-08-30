import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  removeItem (itemTarget) {
    let newDataItems = this.props.dataItems.filter(item => item !== itemTarget);
    this.props.onRemoveItem(newDataItems);
  } 
  render() {
    let items = this.props.dataItems.map((item, index) => 
      <li
        key={index}
        onClick={this.removeItem.bind(this, item)}
      >{item}
      </li>
    );
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default List;
