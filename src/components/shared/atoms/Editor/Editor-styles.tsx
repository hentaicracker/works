import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const mask = (transparency: number): CSSProperties => ({
  backgroundColor: colors.themeMaskColor(transparency),
  width: `100%`,
  height: `100%`,
});
