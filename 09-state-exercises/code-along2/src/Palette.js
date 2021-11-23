import React, { Component } from 'react';
import Box from './Box';
import './Palette.css';

class Palette extends Component {
    static defaultProps = {
        numBoxes: 9,
        allColors: ['red','gold','black','violet','pink','blue','gray','green']
    };


    render(){

        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => (
                <Box colors={this.props.allColors} />
              ));



        return(
            <div className="Palette">
                {boxes}
            </div>
        )
    }





}


export default Palette;