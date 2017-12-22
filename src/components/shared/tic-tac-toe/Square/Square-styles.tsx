import { CSSProperties } from 'glamorous';
import * as colors from '../../../../utils/styles/colors';

export const square = () => ({
  background: `${colors.white}`,
  border: `1px solid ${colors.borderGray}`,
  float: 'left',
  fontSize: 24,
  fontWeight: 'bold',
  lineHeight: 34,
  height: 34,
  width: 34,
  marginRight: -1,
  marginTop: -1,
  padding: 0,
  textAlign: 'center',
  '&:focus': {
    outline: 'none',
  }
} as CSSProperties);