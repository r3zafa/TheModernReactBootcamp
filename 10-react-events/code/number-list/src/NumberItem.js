import React, { Component } from "react";

class NumberItem extends Component {
  render() {
    return (
      <li>
        <span style={({marginRight:'10px'})}>
          {this.props.value}
        </span>
        <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}

export default NumberItem;
