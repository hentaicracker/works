import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './LogoPad-styles';

const { Div, H3 } = glamorous;

interface Props {}

interface State {}

export class LogoPad extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div css={styles.logoPad()}>
        <Div css={styles.logo()} />
        <H3 css={styles.logoTitle()}>cjsofficial</H3>
      </Div>
    );
  }
}