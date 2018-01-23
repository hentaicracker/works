import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const logoPad = () => ({
  height: '50px',
  borderBottom: `1px solid ${colors.borderGray}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '25px'
} as CSSProperties);

export const logo = () => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: colors.darkGray,
} as CSSProperties);

export const logoTitle = () => ({
  width: '90px',
  marginLeft: '20px',
  lineHeight: '50px',
} as CSSProperties);