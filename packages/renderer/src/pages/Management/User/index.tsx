import QuickOperation from '@/components/QuickOperation/QuickOperation'
import { EyeOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Select, Table } from 'antd'
import { useState } from 'react'

const UserManagementPage = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    },
    {
      title: '用户名',
      dataIndex: 'name'
    },
    {
      title: '手机号',
      dataIndex: 'phone'
    },
    {
      title: '用户权限',
      dataIndex: 'permission'
    },
    {
      title: '注册时间',
      dataIndex: 'time'
    },
    {
      title: '操作',
      render: () => {
        return (
          <div className="flex space-x-1">
            <Button type="primary" size="small">
              <div className="flex items-center">
                <EyeOutlined className="mr-[4px]" />
                查看
              </div>
            </Button>
            <Button type="primary" size="small" className="!bg-[#FF7745]">
              编辑
            </Button>
            <Button type="primary" size="small" className="!bg-[#505559]">
              <div className="flex items-center">
                <RedoOutlined className="mr-[4px]" />
                重置
              </div>
            </Button>
            <Button type="primary" size="small" danger>
              <div className="flex items-center">禁用</div>
            </Button>
          </div>
        )
      }
    }
  ]

  const data = []
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => setSelectedRowKeys(selectedRowKeys)
  }

  for (let i = 0; i < 14; i++) {
    data.push({
      key: i + 1,
      name: '陈某某',
      phone: '13111111111',
      hospital: '省第一医院',
      time: '2022-3-6 21:00:00',
      permission: '普通用户',
      rate: '30%'
    })
  }

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card>
        <Form layout="inline">
          <Form.Item label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="用户类型">
            <Select placeholder="选择用户类型" onChange={() => {}}>
              <Select.Option value="普通用户">普通用户</Select.Option>
              <Select.Option value="管理员">管理员</Select.Option>
            </Select>
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

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Card>
    </div>
  )
}

export default UserManagementPage
