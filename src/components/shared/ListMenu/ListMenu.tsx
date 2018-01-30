import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './ListMenu-styles';

const { Section } = glamorous;

interface Props { }

export class ListMenu extends React.Component<Props, {}> {
  render() {
    return (
      <Section css={styles.listWrapper()}>
          world
      </Section>
    );
  }
}