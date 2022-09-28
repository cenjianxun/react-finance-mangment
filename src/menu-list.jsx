import {
    HomeOutlined,
    AccountBookOutlined,
    LineChartOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const MENULIST = [
    {
        label: 'Home',
        key: '/home',
        icon: <HomeOutlined />,
        children: {},
    },
    {
        label: 'Accounting',
        key: '/accounting',
        icon: <AccountBookOutlined />,
        children: {},
    },
    {
        label: 'Analysis',
        key: '/analysis',
        icon: <LineChartOutlined />,
        children: {},
    },
    {
        label: 'Uer',
        key: '/user',
        icon: <UserOutlined />,
        children: {},
    },
    {
        label: 'Setting',
        key: '/setting',
        icon: <SettingOutlined />,
        children: {},
    },
]

export default MENULIST

const backup = [
    {
        name: '凭证',
    },
    {
        name: '资产',
    },
    {
        name: '工资',
    },
    {
        name: '发票',
    },
    {
        name: '期末',
    },
    {
        name: '账簿',
    },
    {
        name: '报表',
    },
    {
        name: '资料',
    },
    {
        name: '初始',
    },
]