import QuickOperation from '@/components/QuickOperation/QuickOperation'
import { DownloadOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Select, Table } from 'antd'
import { useState } from 'react'

const RecordPage = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key'
    },
    {
      title: '患者姓名',
      dataIndex: 'name'
    },
    {
      title: '患者身份证号',
      dataIndex: 'idCard'
    },
    {
      title: '就诊医院',
      dataIndex: 'hospital'
    },
    {
      title: '就诊时间',
      dataIndex: 'time'
    },
    {
      title: '严重程度',
      dataIndex: 'level'
    },
    {
      title: '病灶比例',
      dataIndex: 'rate'
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
      idCard: '441111111111111111',
      hospital: '省第一医院',
      time: '2022-3-6 21:00:00',
      level: '较严重',
      rate: '30%'
    })
  }

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card>
        <Form layout="inline">
          <Form.Item label="患者名称">
            <Input placeholder="请输入患者名称" />
          </Form.Item>
          <Form.Item label="就诊医院">
            <Select placeholder="选择医院" onChange={() => {}}>
              <Select.Option value="省第一医院">省第一医院</Select.Option>
              <Select.Option value="省第二医院">省第二医院</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="身份证号">
            <Input placeholder="请输入身份证号" />
          </Form.Item>
          <Form.Item label="就诊地址">
            <Input.Group compact>
              <Form.Item>
                <Select placeholder="选择省份" onChange={() => {}}>
                  <Select.Option value="浙江省">浙江省</Select.Option>
                  <Select.Option value="安徽省">安徽省</Select.Option>
                  <Select.Option value="福建省">福建省</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select placeholder="选择城市" onChange={() => {}}>
                  <Select.Option value="杭州市">杭州市</Select.Option>
                  <Select.Option value="宁波市">宁波市</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select placeholder="选择县区" onChange={() => {}}>
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
            <Button type="primary" className="!bg-[#72CE60]">
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

export default RecordPage
