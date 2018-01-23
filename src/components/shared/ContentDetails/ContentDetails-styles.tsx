import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const contentWrapper = () => ({
  position: 'absolute',
  backgroundColor: colors.white,
  right: 0,
  width: '50%',
  height: '100%',
} as CSSProperties);