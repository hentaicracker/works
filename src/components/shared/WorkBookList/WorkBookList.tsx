import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './WorkBookList-styles';

const { Ul, Li } = glamorous;

interface Props {
  list: Array<{
    workbookId: string;
    workbookName: string;
    active: boolean;
  }>;
  onClick: Function;
}

export class WorkBookList extends React.Component<Props, {}> {

  renderItem() {
    return this.props.list.map((item, idx) => (
      <Li 
        css={styles.wbItem(item.active)} 
        key={idx}
        onClick={() => this.props.onClick(item.active, idx)}
      >
        {item.workbookName}
      </Li>
    ));
  }

  render() {
    return (
      <Ul css={styles.wbWrapper()}>
        {this.renderItem()}
      </Ul>
    );
  }
}