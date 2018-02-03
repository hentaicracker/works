import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const contentWrapper = (): CSSProperties => ({
  height: `calc(100% - 166px)`,
  borderTop: `1px solid ${colors.lightGray}`,
  overflowY: 'scroll',
  padding: '0 30px',

  '&::-webkit-scrollbar': {
    width: 0,
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: 10,
    background: 'rgba(0, 0, 0, 0.1)',
  },

  '&:hover': {
    paddingRight: 20,

    '&::-webkit-scrollbar': {
      width: 10,
    },
  },

});