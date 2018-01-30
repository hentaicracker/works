import * as React from 'react';
import glamorous from 'glamorous';
import { Dialog } from '../Dialog';
import { Icon } from '../Icon';
import * as styles from './Modal-styles';

const { Div } = glamorous;

interface ModalProps {
  show: boolean;
  maskTransparency: number;
}

export class Modal extends React.Component<ModalProps, {}> {

  render() {
    const posi = {
      top: 5,
      right: 5,
    };
    const modal = this.props.show ? (
      <Dialog>
        <Div css={styles.modal(this.props.maskTransparency)}>
          <div className={'modalWrapper'}>
            <Icon type={'close'} position={posi}/>
            {this.props.children}
          </div>
        </Div>
      </Dialog>
    ) : null;

    return (
      <Div>{modal}</Div>
    );
  }
}