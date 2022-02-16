import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
render(){
    return(
        <div className="Box" 
             style={{
                 height: `${this.props.height}px`, 
                 width:`${this.props.width}px`, 
                 backgroundColor:this.props.color
         }}>

            <button className='Box-btn' onClick={this.props.removeBox}>X</button>
            <p className='Box-text'>
             {this.props.color}
            </p>     
            <p className='Box-text'>
             {this.props.height}px x {this.props.width}px
            </p> 
        </div>
    )
}
}

export default Box;