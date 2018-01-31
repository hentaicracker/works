import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const mask = (transparency: number): CSSProperties => ({
  backgroundColor: colors.themeMaskColor(transparency),
  width: `100%`,
  height: `100%`,
});

export const modal = (transparency: number): CSSProperties => ({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: colors.themeMaskColor(transparency),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .modalWrapper': {
    position: 'relative',
    width: 500,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px ${colors.themeBoxshadowColor}, 0 6px 26px ${colors.themeBoxshadowColor}`,

    '&.small': {
      width: 400,
    }
  },

  '& .content': {
    marginBottom: 20,
  }

});

export const header = (): CSSProperties => ({
  fontSize: 20,
  marginBottom: 20,
});

export const actions = (): CSSProperties => ({
  width: '100%',
  textAlign: 'right',

  '& button': {
    backgroundColor: colors.white,
    padding: `5px 20px`,
    border: `1px solid ${colors.themeLightColor}`,
    borderRadius: 2,
    cursor: 'pointer',
    '&:first-child': {
      marginRight: 10,
    }
  }
});