import React, { Component } from "react";
import "./ShoppingListForm.css";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ShoppingListForm-body">
        <h3 className="ShoppingListForm-h3">
          Add new Item
        </h3>
        {/* <label className="ShoppingListForm-label" htmlFor='name'>Name: </label> */}
        <input className="ShoppingListForm-input"
          id='name'
          name='name'
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        {/* <label className="ShoppingListForm-label" htmlFor='qty'>Quantity: </label> */}
        <input className="ShoppingListForm-input"
          id='qty'
          name='qty'
          placeholder="Quantity"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button className="ShoppingListForm-btn">Add Item!</button>
      </form>
    );
  }
}
export default ShoppingListForm;
