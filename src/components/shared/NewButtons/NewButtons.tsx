import * as React from 'react';
import glamorous from 'glamorous';
import { Icon } from '../atoms/Icon';
import * as styles from './NewButtons-styles';

import { autobind } from 'core-decorators';

import { btnsTypes } from '../../../utils/constants';

const { Div, Button } = glamorous;

interface NewButtonsState {
  showAnimate: boolean;
}

function Btn(props: any) {
  return (
    <Button title={props.title} css={props.css} onClick={() => props.handler()}>
      <Icon type={props.type} animate={props.showAnimate} />
    </Button>
  );
}

export class NewButtons extends React.Component<{}, NewButtonsState> {

  state = {
    showAnimate: false
  };

  @autobind
  handler(type: string) {
    if (type === 'plus') {
      this.setState({
        showAnimate: !this.state.showAnimate
      });
    }
  }

  render() {
    const btns = btnsTypes.map(item => (
      <Btn
        title={item.title}
        type={item.type}
        css={styles.button(item.type)}
        showAnimate={this.state.showAnimate}
        handler={() => this.handler(item.type)}
      />
    ));
    return (
      <Div css={styles.buttonsWrapper()}>
        {btns}
      </Div>
    );
  }
}