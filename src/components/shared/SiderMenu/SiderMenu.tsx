import * as React from 'react';
import glamorous from 'glamorous';
import { LogoPad } from '../LogoPad';
import { WorkBookList } from '../WorkBookList';
import { NewButtons } from '../NewButtons';
import { autobind } from 'core-decorators';

import { workbooklist } from '../../../state/data';

import * as styles from './SiderMenu-styles';

const { Aside } = glamorous;

interface Props { }

interface SiderMenuState {
  workBookList: Array<{
    workbookId: string;
    workbookName: string;
  }>;
  activeWb: string;
}

export class SiderMenu extends React.Component<Props, SiderMenuState> {

  state: SiderMenuState = {
    workBookList: workbooklist,
    activeWb: '',
  };

  @autobind
  handleClick(id: string) {
    this.setState({
      activeWb: id
    });
  }

  render() {
    return (
      <Aside css={styles.aside()}>
        <LogoPad />
        <WorkBookList 
          list={this.state.workBookList} 
          activeWb={this.state.activeWb}
          onClick={(id: string) => this.handleClick(id)} 
        />
        <NewButtons />
      </Aside>
    );
  }
}