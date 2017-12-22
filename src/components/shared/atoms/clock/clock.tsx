import * as React from 'react';
import { autobind } from 'core-decorators';

export interface ClockProps {

}

export interface ClockState {
  date: Date;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timer: NodeJS.Timer;
  state = {
    date: new Date(),
  };

  componentDidMount(): void {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount(): void {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  @autobind
  handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <button onClick={this.handleClick}>Clear</button>
      </div>
    );
  }
}