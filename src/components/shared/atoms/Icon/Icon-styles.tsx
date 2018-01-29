import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const icon = (animate: boolean): CSSProperties => ({
  position: 'absolute',
  display: 'block',
  width: 30,
  height: 30,
  bottom: 15,
  '&.plus': {
    marginLeft: '8px',
    transition: 'ease .2s',
    transform: `rotate(${animate ? '135deg' : '0'})`,
    transformOrigin: `center center`
  },
  '&.plus::before': {
    content: ' ',
    display: 'block',
    position: 'absolute',
    width: '30px',
    height: '1px',
    top: 15,
    backgroundColor: colors.themeLightColor,
  },
  '&.plus::after': {
    content: ' ',
    position: 'absolute',
    height: '30px',
    width: '1px',
    backgroundColor: colors.themeLightColor,
  }
});