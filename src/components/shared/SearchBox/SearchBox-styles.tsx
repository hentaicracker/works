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
    outlineColor: colors.themeLightColor,
    boxShadow: `0 2px 5px ${colors.shadowGray}`,
    fontSize: 16,
  },
});