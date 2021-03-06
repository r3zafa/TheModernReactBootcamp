import React, { Component } from "react";
import "./NewBoxForm.css";
import { v4 as uuid } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    console.log(newBox);
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewBoxForm">
        <label htmlFor="height">Height </label>
        <input
          type="text"
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />

        <label htmlFor="width">Width </label>
        <input
          type="text"
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />

        <label htmlFor="color">Color </label>
        <input
          type="text"
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button>Add new Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
