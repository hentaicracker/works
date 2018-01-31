import * as React from 'react';
import glamorous from 'glamorous';
import { Modal } from '../atoms/Modal';
import { Icon } from '../atoms/Icon';
import * as styles from './NewButtons-styles';

import { autobind } from 'core-decorators';

import { btnsTypes } from '../../../utils/constants';

const { Div, Button } = glamorous;

interface NewButtonsState {
  showAnimate: boolean;
  showWbModal: boolean;
  showWbItemModal: boolean;
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
    showAnimate: false,
    showWbModal: false,
    showWbItemModal: false,
  };

  @autobind
  handler(type: string) {
    if (type === 'plus') {
      this.setState({
        showAnimate: !this.state.showAnimate
      });
    }
    if (type === 'wb') {
      this.setState({
        showWbModal: true
      });
    }
    if (type === 'wbItem') {
      this.setState({
        showWbItemModal: true
      });
    }
  }

  @autobind
  closeModal(type: string) {
    if (type === 'wb') {
      this.setState({
        showWbModal: false
      });
    }
    if (type === 'wbItem') {
      this.setState({
        showWbItemModal: false
      });
    }
  }

  @autobind
  saveForm() {
    console.log('true');
  }

  render() {
    const btns = btnsTypes.map((item, idx) => (
      <Btn
        key={idx}
        title={item.title}
        type={item.type}
        css={styles.button(item.type, this.state.showAnimate)}
        showAnimate={this.state.showAnimate}
        handler={() => this.handler(item.type)}
      />
    ));
    return (
      <Div css={styles.buttonsWrapper()}>
        {btns}
        <Modal
          title={'添加工作簿'}
          show={this.state.showWbModal}
          maskTransparency={0.5}
          handleClose={() => this.closeModal('wb')}
          handleSuccess={() => this.saveForm()}
        >
          <Div />
        </Modal>
        <Modal
          title={'添加记录'}
          show={this.state.showWbItemModal}
          maskTransparency={0}
          handleClose={() => this.closeModal('wbItem')}
          handleSuccess={() => this.saveForm()}
          size={'small'}
        >
          <Div >666</Div>
        </Modal>
      </Div>
    );
  }
}