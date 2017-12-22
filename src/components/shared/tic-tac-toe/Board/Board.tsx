import * as React from 'react';
import { Square } from './../Square/Square';
import glamorous from 'glamorous';
import * as styles from './Board-styles';

import { autobind } from 'core-decorators';

const { Div } = glamorous;

interface Props { }

interface BoardState {
  squares: Array<Number>;
}

export class Board extends React.Component<Props, BoardState> {

  state = {
    squares: Array(9).fill(null),
  };

  @autobind
  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} 
      />
    );
  }

  render() {
    const status = 'Next Player: X';

    return (
      <div>
        <Div css={styles.status()}>{status}</Div>
        <Div css={styles.boardRow()}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Div>
        <Div css={styles.boardRow()}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Div>
        <Div css={styles.boardRow()}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Div>
      </div>
    );
  }
}