import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './NoteContent-styles';

const { Div } = glamorous;

interface Props {}

export class NoteContent extends React.Component<Props, {}> {
  render() {
    return (
      <Div css={styles.contentWrapper()}>
        {}
      </Div>
    );
  }
}