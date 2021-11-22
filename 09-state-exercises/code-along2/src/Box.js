import React, { Component } from 'react';
import { choice } from './choice';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        color:  'black'
    };

    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) };
        this.handelClick = this.handelClick.bind(this);
    }


    pickColor(){
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color);

        this.setState({color: newColor});
    }


    handelClick(){
        this.pickColor();
    }

    render() {
        return ( 
            <div className = "Box" 
            style = { {backgroundColor: this.state.color} }
            onClick={this.handelClick}
            />
        )
    }
}


export default Box;