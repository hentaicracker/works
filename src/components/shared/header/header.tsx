import * as React from 'react';
import glamorous from 'glamorous';

import { Clock } from '../atoms/clock';
import { Form } from '../atoms/form/form';

import * as styles from './header-styles';

const { Div } = glamorous;

export interface HeaderProps {

}

export class Header extends React.Component<HeaderProps, object> {

  numbers: number[] = [1, 2, 3, 4, 5];

  render() {
    const listItems = this.numbers.map((num) => 
      <li key={num.toString()}>{num}</li>
    );

    return (
      <Div css={styles.header()}>
        Hello world!
        <Clock />
        <Form />
        <ul>{listItems}</ul>
      </Div>
    );
  }
}
