import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './_styles';

const { Div, Aside, Section } = glamorous;

export interface PageProps {

}

export class Page extends React.Component<PageProps, object> {
  render() {
    return (
      <Div css={styles.page()}>
        <Aside css={styles.aside()}>
          hello
        </Aside>
        <Section css={styles.listWrapper()}>
          world
        </Section>
        <Section css={styles.contentWrapper()}>
          !!
        </Section>
      </Div>
    );
  }
}