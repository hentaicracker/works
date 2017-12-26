import * as React from 'react';
import glamorous from 'glamorous';
import { Board } from './../Board';
import * as styles from './Game-styles';

import { autobind } from 'core-decorators';

const { Div, Button } = glamorous;

interface GameState {
  history: {
    squares: string[];
    lastStep: string;
  }[];
  stepNumber: number;
  xIsNext: Boolean;
  sort: Boolean;
}

function calculateWinner(squares: string[]): {
  square: string;
  lines: Array<number>;
} | null {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        square: squares[a],
        lines: lines[i],
      };
    }
  }
  return null;
}

export class Game extends React.Component<object, GameState> {

  state: GameState = {
    history: [{
      squares: Array(9).fill(null),
      lastStep: 'Game start',
    }],
    stepNumber: 0,
    xIsNext: true,
    sort: false,
  };

  @autobind
  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const desc = `Move to (${Math.floor(i / 3) + 1}, ${i % 3})`;
    this.setState({
      history: history.concat([{
        squares: squares,
        lastStep: desc,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  @autobind
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  @autobind
  reverseMoves() {
    this.setState({
      sort: !this.state.sort,
    });
  }

  render() {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    if (this.state.sort) {
      history = this.state.history.slice();
      history.reverse();
    }

    const moves = history.map((step, move) => {
      const desc = step.lastStep;
      if (move === this.state.stepNumber) {
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}><strong>{desc}</strong></a>
          </li>
        );
      }
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner is ${winner.square}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <Div css={styles.game}>
        <Div css={styles.gameBoard()}>
          <Board 
            line={winner ? winner.lines : []}
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </Div>
        <Div css={styles.gameInfo()}>
          <Div css={styles.status()}>{status}</Div>
          <Button onClick={this.reverseMoves}>sort</Button>
          <ol>{moves}</ol>
        </Div>
      </Div>
    );
  }
}