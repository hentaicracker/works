// import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const listWrapper = (): CSSProperties => ({
  position: 'absolute',
  left: '260px',
  right: '60%',
  height: '100%',

  '& header': {
    paddingTop: 20
  }
});

export const title = (): CSSProperties => ({
  fontWeight: 'normal',
  fontSize: '1.5em',
  padding: '0 30px',
  height: 36,
});