import React, { Component } from "react";
import "./Keys.css";


class Keys extends Component {
    constructor(props) {
        super(props);
        this.handleGuess = this.handleGuess.bind(this);
      }

      handleGuess() {
        this.props.guess(this.props.letter);
    }
    render() {
        return (
            <button
            className='Keys'
            value={this.props.letter}
            onClick={this.handleGuess}
            disabled={this.props.disabled}
            >
                {this.props.letter}
            </button>
        )
    }


}


export default Keys;