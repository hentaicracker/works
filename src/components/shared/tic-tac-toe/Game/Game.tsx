import * as React from 'react';
import glamorous from 'glamorous';
import { Board } from './../Board/Board';
import * as styles from './Game-styles';

const { Div } = glamorous;

export class Game extends React.Component<object, object> {

  render() {
    return (
      <Div css={styles.game}>
        <Div css={styles.gameBoard()}>
          <Board />
        </Div>
        <Div css={styles.gameInfo()}>
          <div>{}</div>
          <ol>{}</ol>
        </Div>
      </Div>
    );
  }
}