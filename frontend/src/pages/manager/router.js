import { Route, Link, Switch, Redirect } from 'wouter';
import { useState, useCallback } from 'react';
import { ProjectOutlined, RocketOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ROLES } from '../../constants';
import { ProjectList } from '../project-list';
import { StartupList } from '../startup-list';
import Logo from '../../logo.svg';
import styles from './styles.module.css';

const { Content, Sider } = Layout;

const routes = [
  {
    title: 'Проекты',
    url: '/manager/projects',
    component: ProjectList,
    icon: ProjectOutlined,
  },
  {
    title: 'Стартапы',
    url: '/manager/startups',
    component: StartupList,
    icon: RocketOutlined,
  },
];

const RouterList = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.url} component={route.component} />
      ))}
      <Route>
        <Redirect to='/manager/projects' />
      </Route>
    </Switch>
  );
};

const MenuList = () => {
  return (
    <Menu defaultSelectedKeys={[routes[0].url]} mode='inline'>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      {routes.map((route) => (
        <Menu.Item key={route.url} icon={<route.icon />}>
          <Link to={route.url}>{route.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export function ManagerRouter() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light'>
        <MenuList />
      </Sider>
      <Layout className='site-layout'>
        <RouterList />
      </Layout>
    </Layout>
  );
}
