import './item-accounting.styles.scss'
import { Table } from 'antd';
import React from 'react';
import Columns from '../../data/account-table';
import DEMODATA from '../../data/demo-data';
import TableController from '../../components/table/table-controller.comp';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Accounting = () => {
    return (
        <div className='accounting-container'>
            <TableController />
            <Table  
                columns={Columns} 
                dataSource={DEMODATA} 
                onChange={onChange} 
            /> 
        </div>
    )
}



export default Accounting;