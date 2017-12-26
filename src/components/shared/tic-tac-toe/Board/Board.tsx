import * as React from 'react';
import { Square } from './../Square';
import glamorous from 'glamorous';
import * as styles from './Board-styles';

const { Div } = glamorous;

interface BoardProps { 
  line: Array<number>;
  squares: Array<string>;
  onClick: Function;
 }

export class Board extends React.Component<BoardProps, object> {

  renderSquare(i: number) {
    return (
      <Square 
        key={i}
        wining={this.props.line.indexOf(i) > -1}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} 
      />
    );
  }

  render() {
    let rows = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 3 * i; j < 3 * i + 3; j++) {
        let square = this.renderSquare(j);
        row.push(square);
      }
      let div = <Div key={i} css={styles.boardRow()}>{row}</Div>;
      rows.push(div);
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}