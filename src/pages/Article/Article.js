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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{  "@context": "http://schema.org",
              "@type": "Recipe",
              "author": "Barbara Fellner",
              "cookTime": "PT15M",
              "datePublished": "2016-07-08",
              "description": "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
              "image": "https://barbarafellner.at${article.pictureS}",
              "recipeIngredient": ${JSON.stringify(article.ingredients)},
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "http://schema.org/Comment",
                "userInteractionCount": "140"
              },
              "name": "${article.name}",
              "nutrition": {
                "@type": "NutritionInformation",
                "calories": "${article.calories}",
                "fatContent": "9 grams fat"
              },
              "prepTime": "PT15M",
              "recipeInstructions": "${article.name}",
              "recipeYield": "1 Lasagne",
              "aggregateRating": {
                "@type": "AggregateRating",
                "bestRating": "100",
                "ratingCount": "24",
                "ratingValue": "87"
              }
            }`}}></script>
      </div>
    );
  }
}
