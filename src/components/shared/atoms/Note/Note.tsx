import * as React from 'react';
import glamorous from 'glamorous';

import { NoteItem } from '../../../../utils/appInterface';

import * as styles from './Note-styles';

const { Div, H4, P } = glamorous;

interface NoteProps {
  active: boolean;
  note: NoteItem;
  onClick: Function;
}

export class Note extends React.Component<NoteProps, {}> {
  render() {
    return (
      <Div 
        css={styles.NoteWrapper()} 
        className={this.props.active ? 'active' : ''} 
        onClick={() => this.props.onClick()}
      >
        <H4 css={styles.title()}>{this.props.note.title}</H4>
        <P css={styles.date()}>{this.props.note.date}</P>
        <P css={styles.description()}>{this.props.note.description}</P>
      </Div>
    );
  }
}