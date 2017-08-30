import React, { Component } from 'react';
import './App.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {item: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let item = this.state.item.trim();
    this.props.onFormSubmit(item);
    this.setState({item: ''});
  }
  handleItemChange(e) {
		this.setState({item: e.target.value});
	}

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter TODO item"
            value={this.state.item}
            onChange={this.handleItemChange}
          />
          <span>
            <input type="submit" value="Add"/>
          </span>
        </form>
    );
  }
}

export default Input;
