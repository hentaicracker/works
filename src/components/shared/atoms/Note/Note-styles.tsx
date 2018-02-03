import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const NoteWrapper = (): CSSProperties => ({
  margin: '20px 0',
  backgroundColor: colors.white,
  padding: 10,
  color: colors.darkGray,
  cursor: 'pointer',
  fontSize: 14,
  border: `1px solid ${colors.white}`,

  '&:hover': {
    color: colors.black,
    boxShadow: `0 0 10px ${colors.themeBoxshadowColor}`
  },

  '&.active': {
    color: colors.black,
    boxShadow: `0 0 10px ${colors.themeBoxshadowColor}`,
    border: `1px solid ${colors.themeLightColor}`
  }
  
});

export const title = (): CSSProperties => ({
  fontSize: 18,
  color: colors.black,
  height: 27,
  lineHeight: '27px',
});

export const date = (): CSSProperties => ({
  color: colors.darkGray,
});

export const description = (): CSSProperties => ({
  marginTop: 10,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});