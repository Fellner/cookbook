import React, {Component, PropTypes} from 'react';
import {HeroPanel, ContentPanel, Icon} from 'components';
import './About.scss';

export default class About extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render() {
    let {model} = this.props;
    return (
      <div>
        <HeroPanel menu={model.menu} pictureL={require('./images/barbarafellner.jpg')} pictureM={require('./images/barbarafellner_medium.jpg')} pictureS={require('./images/barbarafellner_small.jpg')}/>
        <ContentPanel className="About">
          <h1>Hi, I’m Barbara!</h1>
          <div className="About__desc">
            <p>I am a passionate traveller, lover of vegetarian cuisine, a typical Austrian sportsperson (climbing and hiking in summer and snowboarding in winter) and a Frontend Developer & Web Designer.</p>
            <p>Currently I am living in Vienna, a lovely charming Austrian city with amazing architecture and nice litte coffee shops. In February I will move to Dublin, Ireland. I hope to grow personally and professionally there.</p>
            <p>I am an alumnus of the University of Applied Sciences in Upper Austria. I graduated with a Bachelor of Arts in Social Sciences degree with a major in Communication, Knowledge and Media. Although I have focused on Frontend Development I am an allrounder whom you can ask questions about UI and UX also. I am excited by what the future holds for technology and I am glad to continue taking part in this challenging journey.</p>
            <p>Want to get in touch? <a href="mailto:hello@barbarafellner.at" className="TextLink">Let’s have tea</a> (or anything made of chocolate, I love that too)!</p>
          </div>
          <a href="https://github.com/Fellner" target="_blank"><Icon name="github" /></a>
          <a href="https://twitter.com/barbarafellner" target="_blank"><Icon name="twitter" /></a>
          <a href="https://www.linkedin.com/in/barbara-fellner-13797a6b" target="_blank"><Icon name="linkedin" /></a>
          <a href="https://www.xing.com/profile/Barbara_Fellner2" target="_blank"><Icon name="xing" /></a>
        </ContentPanel>
      </div>
    );
  }
}
