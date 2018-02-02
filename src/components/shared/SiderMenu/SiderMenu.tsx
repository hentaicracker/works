import * as React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { LogoPad } from '../LogoPad';
import { WorkBookList } from '../WorkBookList';
import { NewButtons } from '../NewButtons';
import { selectWorkbook } from '../../../state/actionCreator';

import * as styles from './SiderMenu-styles';

const { Aside } = glamorous;

export interface Workbook {
  workbookId: string;
  workbookName: string;
}

interface SiderMenuProps {
  workBookList: Array<Workbook>;
  activeWb: Workbook;
  selectWorkbook: any;
}

interface SiderMenuState {}

const mapStateToProps = (state: any) => ({
  workBookList: state.data.workbooks,
  activeWb: state.data.activeWorkbook,
});

export class SiderMenuImpl extends React.Component<SiderMenuProps, SiderMenuState> {

  render() {
    return (
      <Aside css={styles.aside()}>
        <LogoPad />
        <WorkBookList 
          list={this.props.workBookList} 
          activeWb={this.props.activeWb}
          onClick={(wb: string) => this.props.selectWorkbook(wb)} 
        />
        <NewButtons />
      </Aside>
    );
  }
}

export const SiderMenu = connect(mapStateToProps, { selectWorkbook })(SiderMenuImpl);