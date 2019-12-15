import React from 'react';
import {Menu} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes';

const TopMenuBar = () => {
  let location = useLocation();
  const selectedKeys = routes.map(route => route.link === location.pathname ? route.key : null);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={selectedKeys}
      style={{ lineHeight: '64px' }}
    >
      {routes.map( item => (
        <Menu.Item key={ item.key }>
          <Link to={ item.link }>{ item.title }</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default TopMenuBar;