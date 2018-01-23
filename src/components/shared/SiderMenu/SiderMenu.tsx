import * as React from 'react';
import glamorous from 'glamorous';
import { LogoPad } from '../LogoPad';
import { WorkBookList } from '../WorkBookList';
import { autobind } from 'core-decorators';

import { workbooklist } from '../../../state/data';

import * as styles from './SiderMenu-styles';

const { Aside } = glamorous;

interface Props { }

interface SiderMenuState {
  workBookList: Array<{
    workbookId: string;
    workbookName: string;
    active: boolean;
  }>;
}

export class SiderMenu extends React.Component<Props, SiderMenuState> {

  state: SiderMenuState = {
    workBookList: workbooklist.map(item => Object.assign(item, {
      active: false
    }))
  };

  @autobind
  handleClick(active: boolean, index: number) {
    const wbList = this.state.workBookList.map((wb, idx) => {
      wb.active = index === idx ? true : false;
      return wb;
    }).slice();
    this.setState({
      workBookList: wbList
    });
  }

  render() {
    return (
      <Aside css={styles.aside()}>
        <LogoPad />
        <WorkBookList 
          list={this.state.workBookList} 
          onClick={(active: boolean, idx: number) => this.handleClick(active, idx)} 
        />
      </Aside>
    );
  }
}