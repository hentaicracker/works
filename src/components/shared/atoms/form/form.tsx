import * as React from 'react';
import { autobind } from 'core-decorators';

interface Props {

}

interface BProps {
  cel: number;
}

interface State {
  temperature: string;
}

export class Form extends React.Component<Props, State> {

  state = {
    temperature: '',
  };

  @autobind
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      temperature: e.target.value
    });
  }

  render() {
    const temperature = this.state.temperature;

    const BoilingVerdict = function(props: BProps) {
      if (props.cel >= 100) {
        return <p>水会烧开</p>;
      }
      return <p>水不会烧开</p>;
    };

    return (
      <fieldset>
        <legend>input</legend>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict cel={parseFloat(temperature)}/> 
      </fieldset>
    );
  }
}