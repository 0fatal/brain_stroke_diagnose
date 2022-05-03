import QuickOperation from '@/components/QuickOperation/QuickOperation'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Table } from 'antd'
import { useState } from 'react'

const LogManagementPage = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    },
    {
      title: '登录名',
      dataIndex: 'name'
    },
    {
      title: '来源IP',
      dataIndex: 'ip'
    },
    {
      title: '操作',
      dataIndex: 'operation'
    },
    {
      title: '时间',
      dataIndex: 'time'
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
      name: '王小二',
      ip: '192.168.37.29',
      operation: '平台数据概览查看',
      time: '2022-3-6 21:00:00'
    })
  }

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

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Card>
    </div>
  )
}

export default LogManagementPage
