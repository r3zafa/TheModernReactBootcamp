import React, { Component } from "react";
import "./Hangman.css";
import Keys from "./Keys";
import randomWord from "./randomWord";
import Image from "./showImages";
class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.guess = this.guess.bind(this);
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

  /** Guess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  guess(evt) {
    // console.log(evt)
    let ltr = evt;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
          <Keys key={index} letter={ltr} guess={this.guess} disabled= {this.state.guessed.has(ltr)} />      
    ));
  }

  reset(){
    this.setState(st => (
      { nWrong: 0, 
        guessed: new Set(),
        answer: randomWord()
       }
    ))
  }


  /** render: render game */
  render() {
    const isGameOver = this.state.nWrong > this.state.answer.length;
    const wrongGeusses = <h2>Wrong Guesses: <span className='Hangman-wrongGuesses'> {this.state.nWrong} </span> </h2>;
    const gameOverH2 = <h2 className='Hangman-gameover'>Game Over!</h2>;
    const guessedLetter = <p className='Hangman-word'>{this.guessedWord()}</p> ;
    const showAnswer = <h1 className='Hangman-Answer'> The Answer was: <span className='Hangman-wrongGuesses'> {this.state.answer} </span> </h1>;
    const btns = this.generateButtons();
    const resetBtn = <button className='Hangman-reset' onClick={this.reset}>Reset</button>;
    return (
      <div className='Hangman'>
        <h1 className='Hangman-h1'>Hangman</h1>
        <Image nWrong={this.state.nWrong} />
        {!isGameOver ? wrongGeusses: gameOverH2}
        {!isGameOver ? guessedLetter : showAnswer}
        {!isGameOver ? btns: resetBtn}
      </div>
    );
  }
}

export default Hangman;
