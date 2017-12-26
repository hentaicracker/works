# works

Create react app with TypeScript && css-in-js way. 

## Get Started
Init a project:
```shell
$ yarn add create-react-app -g

$ create-react-app my-app --scripts-version=react-scripts-ts

$ cd my-app
```
Adding css-in-js module:
```shell
$ yarn add glamorous glamor
```
### Adding style
Creating a style file at `./MyComponent/MyComponent-styles.tsx`.
```javascript
import { CSSProperties } from 'glamorous';
const styles = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#EEE',
  }
}
export const myComponent = (hover: Booleab) => ({
  color: hover ? styles.black : styles.white,
  border: `1px solid ${styles.gray}`,
} as CSSProperties);
```
Importing style file in your component.
```javascript
import * as React from 'react';
import glamorous from 'glamorous';
import * as styles from './MyComponent-styles';

const { Div } = glamorous;

interface Props {
  
}

interface State {
  hovering: Boolean; 
}

export class MyComponent extends React.Component<Props, State> {
  state = {
    hovering: false
  };

  render() {
    return (
      <Div css={styles.myComponent(this.props.hovering)} />
    )
  }
}
```