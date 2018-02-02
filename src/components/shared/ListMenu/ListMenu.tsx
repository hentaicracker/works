import * as React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { SearchBox } from '../SearchBox';
import { Workbook } from '../../../utils/appInterface';
import * as styles from './ListMenu-styles';

const { Section, Header, H3 } = glamorous;

interface ListMenuProps {
  activeWb: Workbook;
}

const mapStateToProps = (state: any) => ({
  activeWb: state.data.activeWorkbook,
});

export class ListMenuImpl extends React.Component<ListMenuProps, {}> {

  render() {
    return (
      <Section css={styles.listWrapper()}>
        <Header>
          <H3 css={styles.title()}>{this.props.activeWb.workbookName}</H3>
          <SearchBox />
        </Header>
      </Section>
    );
  }
}

export const ListMenu = connect(mapStateToProps)(ListMenuImpl);