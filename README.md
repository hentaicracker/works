# works

Create react app with TypeScript & css-in-js. 

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
export const myComponent = (hover: Boolean) => ({
  color: hover ? styles.color.black : styles.color.white,
  border: `1px solid ${styles.color.gray}`,
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
      <Div css={styles.myComponent(this.state.hovering)} />
    )
  }
}
```

## Developing
```shell
$ yarn start

$ yarn build
```
There has a problem with glamorous, when you try to give a glamorous Button an onClick attribute with a Function as argument, a error will be display. Just look at this [issue](https://github.com/paypal/glamorous/issues/353).
