import React, { Component } from 'react';

class List extends Component {
  removeItem (itemIndex) {
    this.props.onRemoveItem(itemIndex);
  } 
  render() {
    let items = this.props.dataItems.map((item, index) => 
      <li
        key={index}
        onClick={() => this.removeItem(index)}
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