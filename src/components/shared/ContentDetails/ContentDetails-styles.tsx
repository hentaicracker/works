import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const contentWrapper = (): CSSProperties => ({
  position: 'absolute',
  backgroundColor: colors.white,
  right: 0,
  width: '60%',
  height: '100%',
});

export const header = (): CSSProperties => ({
  padding: '22px 30px 23px 30px',

  '& h4': {
    fontSize: '1.3em',
    height: 31,
    lineHeight: '31px',
  }
});

export const date = (): CSSProperties => ({
  color: colors.darkGray,
});

export const description = (): CSSProperties => ({
  marginTop: 10,
  height: 48,
});

export const tip = (): CSSProperties => ({
  height: '100%',
  textAlign: 'center',
  fontSize: '2em',
  paddingTop: '10em',
  color: colors.themeBorder
});
