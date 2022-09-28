import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import { Menu, Layout } from 'antd';
import {
    HomeOutlined,
    AccountBookOutlined,
    LineChartOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import MENULIST from "../../menu-list"
import './layout-sider.styles.scss'
import logoImg from '../../assets/logo.svg'
//import MenuItems from '../../components/menu-items/menu-items.comp';

const { Sider } = Layout;

 
function getItem(label, key, icon, items) {
    return {
      key,
      icon,
      items,
      label,
    };
  }
  
const Items = [
    getItem('Home', '/home', <HomeOutlined />),
    getItem('Accounting', '/accounting', <AccountBookOutlined />),
    getItem('Analysis', '/analysis', <LineChartOutlined />),
    getItem('User', '/user', <UserOutlined />),
    getItem('Setting', '/setting', <SettingOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8')
    ]),
  ];

const defaultMenuItem = {
    label: 'Home',
    key: '/home',
    icon: <HomeOutlined />,
    children: {},
}

const LayoutSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuItem, setMenuItem] = useState(defaultMenuItem)

    const navigate = useNavigate()
    const chooseMenuItem = (event) => {
        console.log('点击：', event.key)
        navigate(event.key, { replace: true })
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" >
                <img src={logoImg} alt='site-logo'/>
                <span className={ collapsed ? 'logo-hide' : '' }> FM System</span>
            </div>
            <Menu                 
                theme="dark" 
                mode="inline"
                defaultSelectedKeys={[defaultMenuItem.key]} 
                selectedKeys={[menuItem.key]}
                onClick={chooseMenuItem}
                items={Items} 
                >
            </Menu>
        </Sider>
    )
}

export default LayoutSider
