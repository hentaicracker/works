import * as React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { SearchBox } from '../SearchBox';
import { NoteContent } from '../NoteContent';
import { Workbook } from '../../../utils/appInterface';
import { NoteItem } from '../../../utils/appInterface';
import * as styles from './ListMenu-styles';

const { Section, Header, H3 } = glamorous;

interface ListMenuProps {
  activeWb: Workbook;
  notes: NoteItem[];
}

const mapStateToProps = (state: any) => ({
  activeWb: state.data.activeWorkbook,
  notes: state.data.notes
});

export class ListMenuImpl extends React.Component<ListMenuProps, {}> {

  render() {
    return (
      <Section css={styles.listWrapper()}>
        <Header>
          <H3 css={styles.title()}>{this.props.activeWb.workbookName}</H3>
          <SearchBox />
        </Header>
        <NoteContent notes={this.props.notes}/>
      </Section>
    );
  }
}

export const ListMenu = connect(mapStateToProps)(ListMenuImpl);