import * as colors from '../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const page = () => ({
  backgroundColor: colors.backgroundGray,
  width: '100%',
  height: '100%',
  position: 'relative',
} as CSSProperties);
