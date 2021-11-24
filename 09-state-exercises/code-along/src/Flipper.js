import React, { Component } from 'react';
import coinFront from './images/coinFront.png';
import coinBack from './images/coinBack.png';
import Coin from './Coin';
import {choiceSide} from './ChoiceSide';
import './Flipper.css';
class Flipper extends Component{

    static defaultProps = {
        coins: [
            {side:'heads',imgSrc: coinFront},
            {side:'tails',imgSrc: coinBack}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handelClick = this.handelClick.bind(this);
    };


    flipCoin(){
        const newCoin = choiceSide(this.props.coins);
        this.setState( st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1:0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1:0),
            };
        });
    }

    handelClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div className="Flipper">
                <h1>Let's Flip A coin!</h1>
                <div className="Flipper-coin">
                    {
                        this.state.currCoin 
                    && 
                        <Coin info={this.state.currCoin}/>
                    }                
                </div>
                <button onClick={this.handelClick}>
                    Flip Me!
                </button>
                <p> Flips Count: {this.state.nFlips} </p>
                <p> Heads: {this.state.nHeads} </p>
                <p> Tails: {this.state.nTails} </p>

            </div>
        )
    }



}

export default Flipper;
 
