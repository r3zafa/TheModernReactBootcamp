import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

import { v4 as uuid } from 'uuid';
import './BoxList.css'

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [
                { height: 10, width: 10, color: 'black', id: uuid() },
                { height: 10, width: 10, color: 'red', id: uuid() }
            ]
        };
        this.create = this.create.bind(this);
    }


    create(newBox) {
        console.log(newBox);
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }


    remove(id) {
        this.setState({
            boxes: [...this.state.boxes.filter(box => box.id !== id)]
        });
    }

    render() {
        const boxes = this.state.boxes.map(box => ( 
            <Box 
            key = { box.id }
            id = { box.id }
            height = { box.height }
            width = { box.width }
            color = { box.color }
            removeBox = {() => this.remove(box.id)}
            />
        ));

        return ( 
            <div>
                <h1 className = "BoxList-h1" > Add new Boxes </h1> 
                <NewBoxForm createBox = { this.create } /> 
                { boxes } 
            </div>
        );
    }
}

export default BoxList;