import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './Square-styles';

const { Button } = glamorous;

interface Props {
  value: number;
  onClick: Function;
}

export class Square extends React.Component<Props, {}> {
  
  render() {
    return (
      <Button css={styles.square()} onClick={() => this.props.onClick()} >
      {this.props.value}
      </Button>
    );
  }
}