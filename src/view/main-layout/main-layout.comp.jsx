import './main-layout.styles.scss'
import { Routes, Route, Link, Outlet  } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LayoutSider from '../layout-sider/layout-sider.comp';
import LayoutHeader from '../layout-header/layout-header.comp';
import LayoutContent from '../layout-content/layout-content.comp';
import LayoutFooter from '../layout-footer/layout-footer.comp';

import Home from '../item-home/item-home.comp';
import Accounting from '../item-accounting/item-accounting.comp';
import { Fragment } from 'react';


const { Header, Content, Footer, Sider } = Layout;
 
const MainLayout = () => {
  return (
    <Layout className='main-layout'>
      <LayoutSider /> 
      <Layout className="layout-container">
        <LayoutHeader />
          <Content className='layout-content'>
            <Outlet />
          </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;