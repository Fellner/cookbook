import React, {Component, PropTypes} from 'react';
import {Menu} from 'components';
import articles from 'recipes';
import './App.scss';

let menu = [{
  name: 'Recipes',
  icon: 'leaf',
  url: '/recipe',
  subItems: [{
    name: 'Kohlrabi Lasagne',
    icon: 'blogentry',
    url: '/recipe/kohlrabi-lasagne'
  },
    {
      name: 'Lentils Wrap',
      url: '/recipe/lentils-wrap'
    },
    {
      name: 'Porcini Risotto with hazelnuts',
      url: '/recipe/porcini-risotto'
    }
]
}, {
  name: 'About me',
  icon: 'about',
  url: '/about'
}, {
  name: 'Imprint',
  icon: 'imprint',
  url: '/imprint'
}];

const model = {articles, menu};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  render() {
    let {location} = this.props;
    return (
      <div id="outer-container">
        <Menu menu={menu} pathname={location.pathname} />
        <div id="page-wrap">
          {React.cloneElement(this.props.children, {model})}
        </div>
      </div>
    );
  }
}
