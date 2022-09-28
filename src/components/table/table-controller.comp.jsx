import './table-controller.styles.scss'
import React from 'react';
import { DatePicker, Space, Button, } from 'antd'; 
import {
    EditOutlined,
    FormOutlined,
    DeleteOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

const TableController = () => {
    return (
        <div className='table-controller'>
            <div className='table-add-container'>
                <EditOutlined />
                <span> Add </span>
            </div>
            <div className='table-edit-container'>
                <FormOutlined />
                <span> Edit </span>
            </div>   
            <div className='table-delete-container'>
                <DeleteOutlined />
                <span> Delete </span>
            </div>   
            <div className='table-query-container'>
                <span>Input Date: </span>
                <RangePicker />
                <Button type="primary">
                    Search
                </Button>
                <Button type="primary">
                    Reset
                </Button>
            </div>       
        </div>
    )
}

export default TableController