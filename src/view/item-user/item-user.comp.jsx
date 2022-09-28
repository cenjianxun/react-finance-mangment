import { Breadcrumb } from 'antd';

const User = () => {
    return (
        <>
        <Breadcrumb style={{margin: '16px 0'}} >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className='body'>
            Bill is a cat.
        </div>
        </>
    )
}

export default User