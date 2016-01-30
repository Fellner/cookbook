import React, {Component, PropTypes} from 'react';
import './HeroPanel.scss';
import {breakpoint} from 'utils';


export default class HeroPanel extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    pictureL: PropTypes.string,
    pictureM: PropTypes.string,
    pictureS: PropTypes.string
  };

  render() {
    let {title, subtitle, pictureL, pictureM, pictureS} = this.props;
    let picture1 = breakpoint.isWiderThan('medium') ? pictureL : pictureM;
    let picture = breakpoint.isWiderThan('small') ? picture1 : pictureS;
    return (
      <div className="HeroPanel" style={{backgroundImage: 'url(' + picture + ')'}} >
        <div className="HeroPanel__desc">
          <h1 className="HeroPanel__desc-title">{title}</h1>
          <div className="HeroPanel__desc-subtitle">{subtitle}</div>
        </div>
      </div>
    );
  }
}
