import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './Icon-styles';
const { I } = glamorous;

export function Icon(props: any) {
  return (
    <I className={props.type} css={styles.icon(props.animate)} />
  );
}