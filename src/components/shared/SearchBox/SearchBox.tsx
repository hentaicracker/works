import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './SearchBox-styles';

const { Div, Input } = glamorous;

interface Props {}

export class SearchBox extends React.Component<Props, {}> {
  render() {
    return (
      <Div css={styles.searchBox()}>
        <Input />
      </Div>
    );
  }
}