import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './ContentDetails-styles';

const { Section } = glamorous;

interface Props { }

export class ContentDetails extends React.Component<Props, {}> {
  render() {
    return (
      <Section css={styles.contentWrapper()}>
        !!
      </Section>
    );
  }
}