import React, {Component, PropTypes} from 'react';
import {Icon} from 'components';
import {Link} from 'react-router';
import './BlogList.scss';
export default class BlogList extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  render() {
    let {articles} = this.props;
    return (
      <div className="BlogList">
        {articles.map(article =>
          <Link key={article.name} className="BlogList__item" to={`/recipe/${article.slug}`} key={article.slug}>
            <div className="BlogList__item__picture">
              <img src={article.pictureS}/>
              <div className="BlogList__item__picturetags">
              {article.tags.map(tag =>
                <span className="BlogList__item__picturetag" key={tag}> {tag} </span>
              )}
              </div>
              <div className="BlogList__item__picturetime"><Icon name="clock" /><div>{article.cookingTime}</div></div>
            </div>
            <div className="BlogList__item-text">
              <h2 className="BlogList__item-texttitle"> {article.name} </h2>
              <div className="BlogList__item-textdesc"> {article.shortdesc} </div>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
