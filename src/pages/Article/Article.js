import React, {Component, PropTypes} from 'react';
import {HeroPanel, ContentPanel, Icon} from 'components';
import './Article.scss';

export default class Article extends Component {
  static propTypes = {
    params: PropTypes.object,
    model: PropTypes.object
  };

  render() {
    let {params, model} = this.props;
    let article = model.articles.filter(cur => cur.slug === params.slug)[0];

    return (
      <div>
        <HeroPanel menu={model.menu} pictureL={article.pictureL} pictureS={article.pictureS} pictureM={article.pictureS}/>
        <ContentPanel>
          <div className="Article">
            <div className="Article__tag">{article.tags}</div>
              <h1 className="Article__title">{article.name}</h1>
              <div className="Article__subtitles">
                <span className="Article__subtitles__item">{article.cookingTime}</span><span className="Article__subtitles__item">{article.calories} kcal</span>
              </div>
              <hr className="Article__hr"></hr>
              <div className="Article__ingredients">
              {article.ingredients.map(ingredient =>
                <span key={ingredient} className="Article__ingredient">
                  <Icon name="leaf" />
                  <span className="Article__ingredient__item">{ingredient}</span>
                </span>
              )}
              </div>
              {article.content}
          </div>
        </ContentPanel>
      </div>
    );
  }
}
