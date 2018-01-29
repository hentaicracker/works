import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const wbWrapper = () => ({
  listStyleType: 'none',
} as CSSProperties);

export const wbItem = (active: boolean) => ({
  padding: '1em 1.5em',
  cursor: 'pointer',
  backgroundColor: active ? colors.themeLightColor : colors.white,
  '&:hover': {
    backgroundColor: colors.themeRegularColor
  },
} as CSSProperties);