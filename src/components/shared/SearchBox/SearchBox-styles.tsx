import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const searchBox = (): CSSProperties => ({
  height: 50,
  margin: '25px 30px',

  '& input': {
    backgroundColor: colors.white,
    width: 'calc(100% - 40px)',
    height: 40,
    border: `1px solid ${colors.themeBorder}`,
    padding: '5px 20px',
    boxShadow: `0 0 10px ${colors.shadowGray}`,
    fontSize: 16,
    outline: 'none',
    '&:focus': {
      border: `1px solid ${colors.themeLightColor}`,
    },

    '&::placeholder': {
      color: colors.regularGray,
    }
  },
});