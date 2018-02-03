import * as React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import * as styles from './NoteContent-styles';
import { NoteItem } from '../../../utils/appInterface';
import { selectNote } from '../../../state/actionCreator';

import { Note } from '../atoms/Note';

const { Div } = glamorous;

interface NoteContentProps {
  notes: NoteItem[];
  activeNote: NoteItem;
  selectNote: Function;
}

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps,
  activeNote: state.data.activeNote
});

export class NoteContentImpl extends React.Component<NoteContentProps, {}> {

  renderNoteItems() {
    return this.props.notes.map((note, idx) => (
      <Note 
        key={idx} 
        note={note} 
        active={this.props.activeNote ? this.props.activeNote.noteId === note.noteId : false}
        onClick={() => this.props.selectNote(note)}
      />
    ));
  }

  render() {
    return (
      <Div css={styles.contentWrapper()}>
        {this.renderNoteItems()}
      </Div>
    );
  }
}

export const NoteContent = connect(mapStateToProps, { selectNote })(NoteContentImpl);