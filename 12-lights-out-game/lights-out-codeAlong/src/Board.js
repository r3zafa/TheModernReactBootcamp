import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

    static defaultProps = {
        nRows: 4,
        nCols: 4,
        chanceLightStartsOn: 0.25
    };

    constructor(props) {
        super(props);
        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
        this.reset = this.reset.bind(this);


    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        // TODO: create array-of-arrays of true/false values
        let board = [];
        for (let y = 0; y < this.props.nRows; y++) {
            let row = [];
            for (let x = 0; x < this.props.nCols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    }

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord) {

        let { nCols, nRows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        // console.log('Flipping',coord)
        // console.log(y,' and ',x)

        function flipCell(y, x) {
            // if this coord is actually on board, flip it

            if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
                board[y][x] = !board[y][x];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(y,x);
        flipCell(y,x-1);
        flipCell(y,x+1);
        flipCell(y-1,x);
        flipCell(y+1,x);

        // win when every cell is turned off
        // TODO: determine is the game has been won

        let hasWon = board.every(row => row.every(cell => !cell));
        this.setState({ board, hasWon });
    }


    /** Render game board or winning message. */

    reset(){
        this.setState({ board:this.createBoard(), hasWon:false });
    }

    render() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nRows; y++) {
          let row = [];
          for (let x = 0; x < this.props.nCols; x++) {
            let coordination = `${y}-${x}`;
            row.push(<Cell key={coordination} isLit={this.state.board[y][x]} flipCellsAroundMe={()=>this.flipCellsAround(coordination)}/>);
          }
          tblBoard.push(<tr key={y}>{row}</tr>);
      }


        if(this.state.hasWon){
            return(
                <div className="Board">
                    <h1 className="Board-h1 Board-youWon-h1">
                        YOU WON!
                    </h1>
                    <button className="Board-youWon-btn" onClick={this.reset}>new game</button>
                </div>

            )
        } else {
            return(
                <div className="Board">
                    <h1 className="Board-h1">Light Out</h1>
                    <table className="Board-body">
                        <tbody>
                        {tblBoard}                          
                        </tbody>
                    </table>
                    <button className="Board-youWon-btn" onClick={this.reset}>new game</button>

                </div>
            	)
            }
        // if the game is won, just show a winning msg & render nothing else

        // TODO

        // make table board

        // TODO

    }
}


export default Board;