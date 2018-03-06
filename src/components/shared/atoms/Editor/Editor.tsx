import * as React from 'react';
import glamorous from 'glamorous';
const CodeMirror = require('codemirror');

const { Div } = glamorous;

interface EditorProps {}

export class Editor extends React.Component<EditorProps, {}> {

  codeMirror: any;

  getCodeMirrorInstance() {
    return CodeMirror;
  }

  render() {
    return (
      <Div>adsf</Div>
    );
  }
}