import React, { Component } from 'react';

class Clicker2 extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 1 };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }
    getRandomNumber() {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({number : rand, isWinner: rand === 6})
    }

    render(){

        let btn;
        if(this.state.number !== 6){
            btn = <button onClick={this.getRandomNumber}>Generate a number</button>
        } else {
            btn = <h4>You Win o(*￣︶￣*)o !!! </h4>
        }

        return(
            <div>
                <h1>Number is : {this.state.number}</h1>
                {btn}
            </div>
        )
    }
}




export default Clicker2;