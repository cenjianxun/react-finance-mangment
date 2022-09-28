import { Breadcrumb, Layout } from 'antd';
import './item-analysis.styles.scss'
const Analysis = () => {
    return (
        <div className='container'>
            <Breadcrumb >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background">
                Bill is a cat.
            </div>
        </div>
    )
}

export default Analysis