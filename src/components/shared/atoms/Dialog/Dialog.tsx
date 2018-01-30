import * as React from 'react';
import * as ReactDOM from 'react-dom';

const dialogRoot = document.getElementById('dialog-root');

interface Props { }

export class Dialog extends React.Component<Props, {}> {

  el: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    dialogRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    dialogRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}