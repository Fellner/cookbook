import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Icon} from 'components';
import './Menu.scss';

let MenuExtension = require('react-burger-menu').push;

export default class Menu extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    pathname: PropTypes.string
  };

  render() {
    let {menu, pathname} = this.props;
    return (
        <MenuExtension pageWrapId="page-wrap" outerContainerId="outer-container" >
          {menu.map(menuItem =>
            <div key={menuItem.url} className={pathname.indexOf(menuItem.url) ? 'Menu' : 'Menu Menu--active'} >
              <div className="Menu__item">
                <Link to={menuItem.url} className="Menu__item__mainMenu">
                    <Icon name={menuItem.icon} fill="grey" />
                    <div className="Menu__item-text">{menuItem.name}</div>
                </Link>
                {!menuItem.subItems ? null : menuItem.subItems.map(subItem =>
                <Link to={subItem.url} key={subItem.url} className="Menu__item__subMenu">
                    <div className={pathname === subItem.url ? 'Menu__item-text Menu__item__subMenu--active' : 'Menu__item-text'}>{subItem.name}</div>
                </Link>
                )}
              </div>
            </div>
          )}
        </MenuExtension>
    );
  }
}
