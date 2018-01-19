import * as React from 'react';
// import { connect } from 'react-redux';
import './App.css';

class AppImpl extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default AppImpl;