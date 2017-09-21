import React, { Component } from 'react';
import BlankSymbol from './BlankSymbol';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import { X, O } from '../symbols/symbols';


class Board extends Component {
  constructor(props) {
    super(props)
    this.renderTheGrid = this.renderTheGrid.bind(this)
    this.addSymbol = this.addSymbol.bind(this)
  }
  addSymbol(rowIndex, position, symbol) {
    !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
  }

  getSymbol(rowIndex, position, symbol) {
    if (symbol === X) {
      return <XSymbol key={position}
        position={position} />;
    }
    if (symbol === O) {
      return <OSymbol key={position}
        position={position} />;
    }
    return <BlankSymbol key={position}
      position={position}
      rowIndex={rowIndex}
      addSymbol={this.addSymbol}
      turn={this.props.turn} />;
  }
  renderTheGrid() {
    return Object.keys(this.props.board)
      .map(rowIndex => {
        return (
          <div className={`row row${rowIndex}`} key={rowIndex}>
            {
              this.props.board[rowIndex].map((symbol, positon) => {
                return this.getSymbol(rowIndex, positon, symbol);
              })
            }
          </div>
        );
      })
  }

  render() {
    const wonClass = this.props.won ? ` won-${this.props.wonLine}` : '';
    const drawClass = this.props.draw ? ' draw' : '';
    const boardClass = 'board' + wonClass + drawClass;
    return (
      <div className={boardClass}>
        {
          this.renderTheGrid()
        }
        {
          this.props.won || this.props.draw ?
            <p className="startAgain" onClick={this.props.startAgain}>
              Click to start again!
          </p> : false
        }
      </div>
    );
  }
}

Board.propTypes = {
  board: React.PropTypes.object.isRequired,
  turn: React.PropTypes.string.isRequired,
  won: React.PropTypes.string,
  draw: React.PropTypes.bool.isRequired,
  wonLine: React.PropTypes.string,
  addSymbol: React.PropTypes.func.isRequired,
  startAgain: React.PropTypes.func.isRequired
};


export default Board;
