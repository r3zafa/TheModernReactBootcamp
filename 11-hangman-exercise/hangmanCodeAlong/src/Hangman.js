import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: "apple" };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        className='Hangman-btns'
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}

      >
        {ltr}
      </button>
    ));
  }

  reset(){
    this.setState(st => (
      { nWrong: 0, 
        guessed: new Set() }
    ))
  }
  /** render: render game */
  render() {

    return (
      <div className='Hangman'>
        <h1 className='Hangman-h1'>Hangman</h1> 
        <img src={this.props.images[this.state.nWrong]} 
          alt={'Wrong Guesses:' + ' ' + this.state.nWrong}/>
        {this.state.nWrong !== this.state.answer.length+1 ? 
        <h2>Wrong Guesses:
          <span className='Hangman-wrongGuesses'>
            {this.state.nWrong}
          </span>
         </h2>:
        <h2 className='Hangman-gameover'>Game Over!</h2>}

        {
          this.state.nWrong !== this.state.answer.length+1 ?
          <p className='Hangman-word'>{this.guessedWord()}</p>:
          <h1 className='Hangman-Answer'> The Answer was:
            <span className='Hangman-wrongGuesses'>
              {this.state.answer}
            </span>
          </h1>
        }

        {
          this.state.nWrong !== this.state.answer.length+1 ? 
          this.generateButtons() : 
          <button className='Hangman-reset' onClick={this.reset}>Reset</button> 
        }
      </div>
    );
  }
}

export default Hangman;
