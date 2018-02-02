import * as React from 'react';
import glamorous from 'glamorous';
import { SearchBox } from '../SearchBox';

import * as styles from './ListMenu-styles';

const { Section, Header, H3 } = glamorous;

interface Props { }

export class ListMenu extends React.Component<Props, {}> {
  render() {
    return (
      <Section css={styles.listWrapper()}>
        <Header>
          <H3>{}</H3>
          <SearchBox />
        </Header>
      </Section>
    );
  }
}