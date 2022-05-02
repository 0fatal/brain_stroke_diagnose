import QuickOperation from '@/components/QuickOperation/QuickOperation';
import { DownloadOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Select, Table } from 'antd';
import { useState } from 'react';

const PermissionManagementPage = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    },
    {
      title: '权限组',
      dataIndex: 'group'
    },
    {
      title: '描述',
      dataIndex: 'desc'
    },
    {
      title: '操作',
      render: () => {
        return (
          <div className="flex space-x-1">
            <Button type="primary" danger size="small">
              编辑
            </Button>
          </div>
        );
      }
    }
  ];

  const data = [];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => setSelectedRowKeys(selectedRowKeys)
  };

  data.push({
    key: 1,
    group: '超级管理员',
    desc: '用户系统所有权限的角色'
  });

  data.push({
    key: 2,
    group: '普通用户',
    desc: '可查看数据概况，诊断记录，可进行病情诊断'
  });

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card>
        <Form layout="inline">
          <Form.Item label="关键词">
            <Input placeholder="请输入关键词" />
          </Form.Item>
        </Form>
        <div className="w-full flex justify-end p-[10px]">
          <Button type="primary">
            <div className="flex items-center">
              <SearchOutlined className="mr-[4px]" />
              搜索
            </div>
          </Button>
        </div>
        <div className="w-full flex justify-end p-[10px]">
          <div className="flex space-x-1">
            <Button type="primary">
              <div className="flex items-center">
                <PlusOutlined className="mr-[4px]" />
                添加
              </div>
            </Button>
          </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default PermissionManagementPage;
