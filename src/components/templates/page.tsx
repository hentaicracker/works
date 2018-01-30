import * as React from 'react';
import glamorous from 'glamorous';

import { SiderMenu } from '../shared/SiderMenu';
import { ListMenu } from '../shared/ListMenu';
import { ContentDetails } from '../shared/ContentDetails';

import * as styles from './_styles';

const { Div } = glamorous;

export interface PageProps {

}

export class Page extends React.Component<PageProps, object> {
  render() {
    return (
      <Div css={styles.page()}>
        <SiderMenu />
        <ListMenu />
        <ContentDetails />
      </Div>
    );
  }
}