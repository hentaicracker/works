import * as React from 'react';
import glamorous from 'glamorous';
import { Dialog } from '../Dialog';
import { Icon } from '../Icon';
import * as styles from './Modal-styles';

const { Div, Header, Footer, Button } = glamorous;

interface ModalProps {
  show: boolean;
  maskTransparency: number;
  handleClose: Function;
  handleSuccess: Function;
  title: string;
  size?: string;
}

export class Modal extends React.Component<ModalProps, {}> {

  render() {
    const posi = {
      top: 15,
      right: 15,
    };
    const modal = this.props.show ? (
      <Dialog>
        <Div css={styles.modal(this.props.maskTransparency)}>
          <Div className={this.props.size ? `modalWrapper ${this.props.size}` : 'modalWrapper'}>
            <Icon 
              type={'close'} 
              position={posi} 
              onClick={() => this.props.handleClose()}
            />
            <Header css={styles.header()}>
              {this.props.title}
            </Header>
            <div className={'content'}>
              {this.props.children}
            </div>
            <Footer css={styles.actions()}>
              <Button onClick={() => this.props.handleClose()}>取消</Button>
              <Button onClick={() => this.props.handleSuccess()}>保存</Button>
            </Footer>
          </Div>
        </Div>
      </Dialog>
    ) : null;

    return (
      <Div>{modal}</Div>
    );
  }
}