import * as colors from '../../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const mask = (transparency: number): CSSProperties => ({
  backgroundColor: colors.themeMaskColor(transparency),
  width: `100%`,
  height: `100%`,
});

export const editorWrapper = (): CSSProperties => ({
  borderTop: `1px solid ${colors.themeBorder}`,
  display: 'flex',
  height: 'calc(100% - 157px)'
});

export const left = (): CSSProperties => ({
  width: 'calc(50% - 1px)',
  borderRight: `1px solid ${colors.themeBorder}`,
  padding: 20,

  '& .ReactCodeMirror': {
    height: '100%',

    '& .CodeMirror': {
      height: '100%',

      '& .CodeMirror-scroll': {
        marginLeft: 1
      }
    }
  }
});

export const right = (): CSSProperties => ({
  width: '50%',
  padding: '20px 30px',
  overflow: 'scroll',
});
