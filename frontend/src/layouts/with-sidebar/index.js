import { useState, useCallback } from 'react';
import { Link, Route } from 'wouter';
import { Menu } from 'antd';
import { FormOutlined, PieChartOutlined } from '@ant-design/icons';

import { StartupForm } from './pages/startup-form';
import { Analytics } from './pages/analytics';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
const routes = [
  {
    title: 'Форма стартапа',
    url: '/startup-form',
    component: StartupForm,
    icon: FormOutlined,
  },
  {
    title: 'Аналитика',
    url: '/analytics',
    component: Analytics,
    icon: PieChartOutlined,
  },
];

const Router = () => {
  return routes.map((route) => (
    <Route path={route.url} component={route.component} />
  ));
};

const MenuList = () => {
  return (
    <Menu defaultSelectedKeys={[routes[0].url]} mode='inline'>
      {routes.map((route) => (
        <Menu.Item key={route.url} icon={<route.icon />}>
          <Link href={route.url}>{route.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export function LayoutWithSidebar() {
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem('isSiderCollapsed')
  );
  const toggleCollapse = useCallback(() => {
    setCollapsed(!collapsed);
    localStorage.setItem('isSiderCollapsed', !collapsed);
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}>
        <MenuList />
      </Sider>
      <Layout className='site-layout'>
        <Content style={{ margin: '0 16px' }}>
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
}
