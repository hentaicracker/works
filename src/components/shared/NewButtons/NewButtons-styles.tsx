import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const buttonsWrapper = (): CSSProperties => ({
  position: 'absolute',
  bottom: '20px',
  left: '100px',
});

export const button = (type: string): CSSProperties => {
  let btnWidth: string;
  switch (type) {
    case 'wb': 
      btnWidth = '40px';
      break;
    case 'wbItem': 
      btnWidth = '40px';
      break;
    default: 
      btnWidth = '60px';
      break;
  }
  return {
    position: 'relative',
    width: btnWidth,
    height: btnWidth,
    backgroundColor: colors.white,
    border: `1px solid ${colors.themeLightColor}`,
    borderRadius: '50%',
    cursor: `pointer`,
  };
};