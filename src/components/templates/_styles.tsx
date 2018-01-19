import * as colors from '../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const page = () => ({
  backgroundColor: colors.backgroundGray,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
} as CSSProperties);

export const aside = () => ({
  backgroundColor: colors.white,
  width: '260px',
  height: '100%',
} as CSSProperties);

export const listWrapper = () => ({
  left: '260px',
  right: '50%',
} as CSSProperties);

export const contentWrapper = () => ({
  backgroundColor: colors.white,
  right: 0,
  width: '50%',
} as CSSProperties);