import * as React from 'react';
import glamorous from 'glamorous';

import * as styles from './WorkBookList-styles';

const { Ul, Li } = glamorous;

interface Props {
  list: Array<{
    workbookId: string;
    workbookName: string;
  }>;
  activeWb: string;
  onClick: Function;
}

function Item(props: any) {
  return (
    <Li css={styles.wbItem(props.highLight)} onClick={() => props.onClick(props.id)}>
      {props.name}
    </Li>
  );
}

export class WorkBookList extends React.Component<Props, {}> {

  renderItem() {
    return this.props.list.map((item, idx) => (
      <Item 
        key={idx}
        id={item.workbookId}
        name={item.workbookName}
        highLight={this.props.activeWb === item.workbookId}
        onClick={(id: string) => this.props.onClick(id)}
      />
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