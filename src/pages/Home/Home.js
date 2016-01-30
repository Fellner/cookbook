import React, {Component, PropTypes} from 'react';
import {BlogList, HeroPanel, ContentPanel} from 'components';

export default class Home extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render() {
    let {model} = this.props;
    return (
      <div>
        <HeroPanel title="Cookbook" subtitle="Vegetarian definitely doesn't mean tasteless" pictureL={require('./images/cooking.jpg')} pictureS={require('./images/cooking_small.jpg')} pictureM={require('./images/cooking_small.jpg')}/>
        <ContentPanel>
          <BlogList articles={model.articles} />
        </ContentPanel>
      </div>
    );
  }
}
