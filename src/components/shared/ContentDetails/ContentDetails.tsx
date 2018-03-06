import * as React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { NoteItem } from '../../../utils/appInterface';
import * as styles from './ContentDetails-styles';

import { autobind } from 'core-decorators';

const CodeMirror = require('react-codemirror');
const Markdown = require('react-markdown');

require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');

const { Div, Section, Header, H4, P } = glamorous;

interface ContentDetailsProps {
  activeNote: NoteItem;
}

const mapStateToProps = (state: any) => ({
  activeNote: state.data.activeNote,
});

export class ContentDetailsImpl extends React.Component<ContentDetailsProps, {}> {

  state = {
    source: ''
  }

  @autobind()
  updateSource(source: string) {
    this.setState({
      source: source
    })
  }

  renderViews() {
    const editorOptions = {
      mode: 'markdown'
    };
    return (
      <Div css={styles.editorWrapper()}>
        <Div css={styles.left()}>
          <CodeMirror 
            value={this.state.source} 
            onChange={this.updateSource} 
            options={editorOptions}
            autoFocus={true}
          />
        </Div>
        <Div css={styles.right()}>
          <Markdown 
            source={this.state.source}
            skipHtml={false}
            escapeHtml={true}
          />
        </Div>
      </Div>
    )
  }

  render() {
    return (
      <Section css={styles.contentWrapper()}>
        {this.props.activeNote ? (
          <Div style={{height: '100%'}}>
            <Header css={styles.header()}>
              <H4>{this.props.activeNote.title}</H4>
              <P css={styles.date()}>{this.props.activeNote.date}</P>
              <P css={styles.description()}>{this.props.activeNote.description}</P>
            </Header>
            {this.renderViews()}
          </Div>
        ) : (
          <Div css={styles.tip()}>请选择一条记录进行预览</Div>
        )}
        
      </Section>
    );
  }
}

export const ContentDetails = connect(mapStateToProps)(ContentDetailsImpl);