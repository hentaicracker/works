import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './Square-styles';

const { Button } = glamorous;

interface Props {
  wining: Boolean;
  value: string;
  onClick: Function;
}

export class Square extends React.Component<Props, {}> {
  
  render() {
    return (
      <Button css={styles.square(this.props.wining)} onClick={() => this.props.onClick()} >
      {this.props.value}
      </Button>
    );
  }
}