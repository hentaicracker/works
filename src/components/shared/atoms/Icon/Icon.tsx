import * as React from 'react';
import glamorous from 'glamorous';
import * as PropTypes from 'prop-types';
import * as styles from './Icon-styles';
const { I } = glamorous;

interface IconProps {
  type: string;
  animate?: boolean;
  position?: {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
  };
  onClick?: Function;
}

export class Icon extends React.Component<IconProps, {}> {

  static propTypes = {
    type: PropTypes.string.isRequired,
    animate: PropTypes.bool,
    position: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    onClick: PropTypes.func,
  };

  render() {
    return (
      <I 
        className={this.props.type} 
        css={styles.icon(this.props.animate)} 
        style={this.props.position ? {
          top: this.props.position.top || 'auto',
          right: this.props.position.right || 'auto',
          bottom: this.props.position.bottom || 'auto',
          left: this.props.position.left || 'auto',
        } : {}}
        onClick={() => this.props.onClick ? this.props.onClick() : null}
      />
    );
  }
}
