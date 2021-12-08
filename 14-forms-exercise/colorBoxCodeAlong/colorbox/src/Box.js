import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
render(){
    return(
        <div className="Box" 
             style={{
                 height: `${this.props.height}rem`, 
                 width:`${this.props.width}rem`, 
                 backgroundColor:this.props.color
         }}>
            <span className="colorSpan">
            {this.props.color}
            <button onClick={this.props.removeBox}>X</button>
            </span>
        </div>
    )
}
}

export default Box;