import QuickOperation from '@/components/QuickOperation/QuickOperation'
import { DownloadOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Select, Table } from 'antd'
import { useState } from 'react'

const DevicePage = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    },
    {
      title: '设备名称',
      dataIndex: 'deviceName'
    },
    {
      title: '设备号',
      dataIndex: 'deviceId'
    },
    {
      title: '所属医院',
      dataIndex: 'hospital'
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
            <Button type="primary" danger size="small">
              编辑
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
      deviceName: `设备${i + 1}`,
      deviceId: `YRJ00${34 + 1}`,
      hospital: '省第一医院'
    })
  }

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card>
        <Form layout="inline">
          <Form.Item label="设备名称">
            <Input placeholder="请输入设备名称" />
          </Form.Item>
          <Form.Item label="所属医院">
            <Select placeholder="选择医院">
              <Select.Option value="省第一医院">省第一医院</Select.Option>
              <Select.Option value="省第二医院">省第二医院</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="设备编号">
            <Input placeholder="请输入设备编号" />
          </Form.Item>
          <Form.Item label="设备地址">
            <Input.Group compact>
              <Form.Item>
                <Select placeholder="选择省份">
                  <Select.Option value="浙江省">浙江省</Select.Option>
                  <Select.Option value="安徽省">安徽省</Select.Option>
                  <Select.Option value="福建省">福建省</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select placeholder="选择城市">
                  <Select.Option value="杭州市">杭州市</Select.Option>
                  <Select.Option value="宁波市">宁波市</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select placeholder="选择县区">
                  <Select.Option value="上城区">上城区</Select.Option>
                  <Select.Option value="下城区">下城区</Select.Option>
                  <Select.Option value="钱塘区">钱塘区</Select.Option>
                </Select>
              </Form.Item>
            </Input.Group>
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
                <DownloadOutlined className="mr-[4px]" />
                导出
              </div>
            </Button>
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
  )
}

export default DevicePage
