import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const buttonsWrapper = (): CSSProperties => ({
  position: 'absolute',
  bottom: '80px',
  left: '100px',
});

export const button = (type: string, animate: boolean): CSSProperties => {
  let styles = {
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: '50%',
    cursor: `pointer`,
  };
  let style: CSSProperties;
  switch (type) {
    case 'wb':
      style = {
        width: 40,
        height: 40,
        top: -50,
        left: 20,
        transition: 'ease .2s',
        border: `1px solid ${colors.themeLightColor}`,
        transform: `
          translate(${animate ? '0, 0' : '-10px, 50px'})
          scale(${animate ? '1, 1' : '0, 0'})
        `,
      };
      break;
    case 'wbItem':
      style = {
        width: 40,
        height: 40,
        left: 70,
        transition: 'ease .2s',
        border: `1px solid ${colors.themeLightColor}`,
        transform: `
          translate(${animate ? '0, 0' : '-70px, 10px'})
          scale(${animate ? '1, 1' : '0, 0'})
        `,
      };
      break;
    default:
      style = {
        width: 60,
        height: 60,
        border: `2px solid ${colors.themeLightColor}`,
      };
      break;
  }
  return Object.assign(styles, style);
};