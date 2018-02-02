// import * as colors from '../../../utils/styles/colors';
import { CSSProperties } from 'glamorous';

export const listWrapper = (): CSSProperties => ({
  position: 'absolute',
  left: '260px',
  right: '50%',
  height: '100%',

  '& header': {
    padding: '20px 0'
  }
});

export const title = (): CSSProperties => ({
  fontWeight: 'normal',
  fontSize: '1.5em',
  padding: '0 30px',
  height: 36,
});