import * as React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { NoteItem } from '../../../utils/appInterface';
import * as styles from './ContentDetails-styles';

const { Div, Section, Header, H4, P } = glamorous;

interface ContentDetailsProps {
  activeNote: NoteItem;
}

const mapStateToProps = (state: any) => ({
  activeNote: state.data.activeNote,
});

export class ContentDetailsImpl extends React.Component<ContentDetailsProps, {}> {

  render() {
    return (
      <Section css={styles.contentWrapper()}>
        {this.props.activeNote ? (
          <Header css={styles.header()}>
            <H4>{this.props.activeNote.title}</H4>
            <P css={styles.date()}>{this.props.activeNote.date}</P>
            <P css={styles.description()}>{this.props.activeNote.description}</P>
          </Header>
        ) : (
          <Div>请选择一条记录进行预览</Div>
        )}
        
      </Section>
    );
  }
}

export const ContentDetails = connect(mapStateToProps)(ContentDetailsImpl);