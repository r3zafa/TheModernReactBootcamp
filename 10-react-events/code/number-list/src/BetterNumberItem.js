import React, { Component } from "react";

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(evt) {
    console.log("INSIDE HANDLE REMOVE");
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li>
        <span style={({marginRight:'10px'})}>
            {this.props.value}
        </span>
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
