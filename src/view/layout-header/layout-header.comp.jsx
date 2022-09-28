import { Layout, Menu, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DefaultImg from  '../../assets/default-user.svg'
import './layout-header.styles.scss'

const { Header } = Layout;
const { SubMenu } = Menu

const LayoutHeader = () => {
    return (
        <Header className='header-container'>
            <Menu  className='user-container' key="user" mode="horizontal" >
                <span className='user-text'>
                Hi, Customer  
                </span>
            <SubMenu
              key='account'
              title={<Avatar size={36} icon={<UserOutlined />}  />}
            >
              <Menu.Item key="SignOut">
              Sign out
              </Menu.Item>
            </SubMenu>
          </Menu>  
        </Header>   
    )
}

export default LayoutHeader