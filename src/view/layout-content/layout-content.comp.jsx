
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from '../item-home/item-home.comp';
import Accounting from '../item-accounting/item-accounting.comp';
import './layout-content.styles.scss'
 

const { Content } = Layout;


const LayoutContent = () => {
    return (
        <Content className='content-container' >
          <Routes>
            <Route path='/home' component={Home} />
            <Route path='/accounting' component={Accounting} />
          </Routes>
        </Content>
    )
}

export default LayoutContent

// style={{
//     padding: 24,
//     minHeight: 360,
//   }}