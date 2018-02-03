import * as React from 'react';
import glamorous from 'glamorous';
import { Workbook } from '../../../utils/appInterface';

import * as styles from './WorkBookList-styles';

const { Ul, Li } = glamorous;

interface Props {
  list: Array<Workbook>;
  activeWb: Workbook;
  onClick: Function;
}

function Item(props: any) {
  return (
    <Li css={styles.wbItem(props.highLight)} onClick={() => props.onClick(props.item)}>
      {props.item.workbookName}
    </Li>
  );
}

export class WorkBookList extends React.Component<Props, {}> {

  renderItem() {
    return this.props.list.map((item, idx) => (
      <Item 
        key={idx}
        item={item}
        highLight={this.props.activeWb.workbookId === item.workbookId}
        onClick={(i: Workbook) => this.props.onClick(i)}
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