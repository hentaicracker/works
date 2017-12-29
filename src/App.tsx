import * as React from 'react';
// import { Header } from './components/shared/header/header';
import { Game } from './components/shared/tic-tac-toe/Game';
import './App.css';

class App extends React.Component {
  render() {
    return (
      // <Header />
      <Game />
    );
  }
}

export default App;