import * as React from 'react';
import glamorous from 'glamorous';
import { autobind } from 'core-decorators';
import * as styles from './Editor-styles';
import { Controlled as CodeMirror } from 'react-codemirror2';
import * as Markdown from 'react-markdown';

require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');

const { Div } = glamorous;

interface EditorProps {
  source: string;
}

export class Editor extends React.Component<EditorProps, {}> {

  state = {
    source: this.props.source
  };

  componentWillReceiveProps(props: EditorProps) {
    this.setState({
      source: props.source
    });
  }

  @autobind()
  updateSource(editor: any, data: any, value: string) {
    this.setState({
      source: value
    });
  }

  render() {
    const editorOptions = {
      mode: 'markdown'
    };
    return (
      <Div css={styles.editorWrapper()}>
        <Div css={styles.left()}>
          <CodeMirror 
            value={this.state.source} 
            onChange={this.updateSource} 
            onBeforeChange={this.updateSource}
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
    );
  }
}