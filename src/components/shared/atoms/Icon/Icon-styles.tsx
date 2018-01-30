import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const icon = (animate: boolean): CSSProperties => ({
  position: 'absolute',
  display: 'block',
  
  '&.plus': {
    width: 30,
    height: 30,
    bottom: 13,
    marginLeft: 7,
    transition: 'ease .2s',
    transform: `rotate(${animate ? '135deg' : '0'})`,
    transformOrigin: `center center`,
  },
  '&.plus::before': {
    content: ' ',
    display: 'block',
    position: 'absolute',
    width: '30px',
    height: '2px',
    top: 15,
    backgroundColor: colors.themeDarkColor,
  },
  '&.plus::after': {
    content: ' ',
    position: 'absolute',
    height: '30px',
    width: '2px',
    backgroundColor: colors.themeDarkColor,
  },

  '&.wb': {
    width: 20,
    height: 20,
    marginTop: -11,
    marginLeft: 3,
    border: `1px solid ${colors.themeDarkColor}`,
    borderRadius: '2px 5px 5px 2px',
    backgroundColor: colors.lightRed,
    
    '&::before': {
      content: ' ',
      position: 'absolute',
      width: 1,
      height: 20,
      right: 5,
      backgroundColor: colors.themeDarkColor,
    }
  },

  '&.wbItem': {
    width: 5,
    height: 16,
    bottom: 13,
    left: 18,
    transform: `rotate(45deg)`,
    border: `1px solid ${colors.themeDarkColor}`,
    backgroundColor: colors.themeDarkColor,

    '&::before': {
      content: ' ',
      position: 'absolute',
      width: 0,
      height: 0,
      left: -1,
      top: 19,
      borderLeft: `solid 3px transparent`,
      borderRight: `solid 4px transparent`,
      borderTop: `solid 8px transparent`,
      borderBottom: `solid 7px ${colors.black}`,
      transform: `rotate(180deg)`
    }
  }

});