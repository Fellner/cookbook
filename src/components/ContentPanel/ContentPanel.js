import React, {Component, PropTypes} from 'react';
import './ContentPanel.scss';

export default class ContentPanel extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="ContentPanel">
        <div className="ContentPanel__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
