import { SearchOutlined } from '@ant-design/icons'
import { useReactive } from 'ahooks'
import { Button, Card, DatePicker, Form, Input, Select, Table } from 'antd'
import { FC, useEffect, useState } from 'react'
import { RangeValue } from 'rc-picker/lib/interface.d'
import { Moment } from 'moment'
import { ObjInfo } from '../../define'

interface IProps {
  data: ObjInfo[]
  onGoTo?: (i: number) => void
}

const ObjectSelect: FC<IProps> = ({ data: rawData, onGoTo }) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '就诊医院',
      dataIndex: 'hospital'
    },
    {
      title: '身份证号',
      dataIndex: 'idCard'
    },
    {
      title: '就诊地址',
      dataIndex: 'address',
      render: (address: { p: string; c: string; a: string }) => {
        return `${address.p}${address.c}${address.a}`
      }
    },
    {
      title: '就诊时间',
      dataIndex: 'date',
      render: (date: Moment) => {
        return date.format('YYYY-MM-DD HH:mm:ss')
      }
    },
    {
      title: '操作',
      render: (_: any, __: any, idx: number) => {
        return (
          <div>
            <Button type="primary" onClick={() => onGoTo?.(idx)}>
              去诊断
            </Button>
          </div>
        )
      }
    }
  ]

  const state = useReactive<{
    name?: string
    hospital?: string
    idCard?: string
    address: {
      p?: string
      c?: string
      a?: string
    }
  }>({
    name: undefined,
    hospital: undefined,
    idCard: undefined,
    address: {
      p: undefined,
      c: undefined,
      a: undefined
    }
  })

  const [date, setDate] = useState<RangeValue<Moment>>([null, null])

  const [data, setData] = useState(rawData)

  const handleSearch = () => {
    setData(
      rawData.filter((item) => {
        if (state.name) {
          if (!item.name.includes(state.name)) {
            return false
          }
        }
        if (state.hospital) {
          if (!item.hospital.includes(state.hospital)) {
            return false
          }
        }
        if (state.idCard) {
          if (!item.idCard.includes(state.idCard)) {
            return false
          }
        }
        if (state.address.p) {
          if (!item.address.p.includes(state.address.p)) {
            return false
          }
        }
        if (state.address.c) {
          if (!item.address.c.includes(state.address.c)) {
            return false
          }
        }
        if (state.address.a) {
          if (!item.address.a.includes(state.address.a)) {
            return false
          }
        }
        if (date) {
          let start = true
          let end = true

          if (date?.[0]) {
            start = date[0].isBefore(item.date)
          }

          if (date?.[1]) {
            end = date[1].isAfter(item.date)
          }
          if (!start || !end) {
            return false
          }
        }
        return true
      })
    )
  }

  // useEffect(() => {
  //   // filter rawData if one filed is not empty and judge if the value includes it
  // }, [
  //   state.name,
  //   state.hospital,
  //   state.idCard,
  //   state.address.p,
  //   state.address.c,
  //   state.address.a,
  //   date
  // ])

  useEffect(() => {
    state.address.c = undefined
    state.address.a = undefined
  }, [state.address.p])

  useEffect(() => {
    state.address.a = undefined
  }, [state.address.c])

  return (
    <div>
      <Card title="选择就诊者">
        <Form layout="inline">
          <Form.Item label="就诊者名称">
            <Input
              placeholder="请输入就诊者名称"
              value={state.name}
              onChange={(e) => (state.name = e.target.value)}
            />
          </Form.Item>
          <Form.Item label="就诊医院">
            <Select
              placeholder="选择医院"
              value={state.hospital}
              onChange={(v) => (state.hospital = v)}>
              <Select.Option value="省第一医院">省第一医院</Select.Option>
              <Select.Option value="省第二医院">省第二医院</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="身份证号">
            <Input
              placeholder="请输入身份证号"
              value={state.idCard}
              onChange={(e) => (state.idCard = e.target.value)}
            />
          </Form.Item>
          <Form.Item label="就诊地址">
            <Input.Group compact>
              <Form.Item>
                <Select
                  placeholder="选择省份"
                  value={state.address.p}
                  onChange={(v) => {
                    state.address.p = v
                  }}>
                  <Select.Option value="浙江省">浙江省</Select.Option>
                  <Select.Option value="安徽省">安徽省</Select.Option>
                  <Select.Option value="福建省">福建省</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  placeholder="选择城市"
                  value={state.address.c}
                  onChange={(v) => {
                    state.address.c = v
                  }}>
                  {state.address.p === '浙江省' && (
                    <>
                      <Select.Option value="杭州市">杭州市</Select.Option>
                      <Select.Option value="宁波市">宁波市</Select.Option>
                    </>
                  )}
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  placeholder="选择县区"
                  value={state.address.a}
                  onChange={(v) => {
                    state.address.a = v
                  }}>
                  {state.address.c === '杭州市' && (
                    <>
                      <Select.Option value="上城区">上城区</Select.Option>
                      <Select.Option value="下城区">下城区</Select.Option>
                      <Select.Option value="钱塘区">钱塘区</Select.Option>
                    </>
                  )}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="就诊时间">
            <DatePicker.RangePicker
              showTime
              value={date}
              allowEmpty={[true, true]}
              placeholder={['开始时间', '结束时间']}
              onChange={setDate}
            />
          </Form.Item>
        </Form>
        <div className="flex justify-end">
          <Button size="large" type="primary" className="m-[20px]" onClick={handleSearch}>
            <div className="flex items-center">
              <SearchOutlined className="mr-[8px]" />
              查找
            </div>
          </Button>
        </div>
        <Table columns={columns} dataSource={data}></Table>
      </Card>
    </div>
  )
}

export default ObjectSelect
