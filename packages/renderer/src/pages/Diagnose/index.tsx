import ObjectSelect from './components/ObjectSelect/ObjectSelect'
import moment from 'moment'
import { useState } from 'react'
import DiagnosePanel from './components/DiagnosePanel/DiagnosePanel'
import type { ObjInfo } from './define'
import { Affix, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const DiagnosePage = () => {
  const rawData: ObjInfo[] = [
    {
      name: '张三',
      hospital: '省第一医院',
      idCard: '43112319901012335',
      address: {
        p: '浙江省',
        c: '杭州市',
        a: '上城区'
      },
      date: moment('2022-03-01 12:20:00'),
      phone: '13111111111',
      sex: '男',
      age: 32
    },
    // generate 10 different data for test. the hospital field is 省第一医院 or 省第二医院, the idCard field is different from each other, the address field: p is 浙江省, c is 杭州市, a is 钱塘区
    ...Array.from({ length: 10 }, (_, idx) => {
      const hospital = Math.random() > 0.5 ? '省第一医院' : '省第二医院'
      const idCard = `4311231990101234${idx}`
      const address = {
        p: '浙江省',
        c: '杭州市',
        a: Math.random() > 0.5 ? '下城区' : '钱塘区'
      }
      return {
        name: `张${idx}`,
        hospital,
        idCard,
        address,
        date: moment('2022-03-01 12:20:00').add(idx, 'days'),
        phone: `1311111111${idx}`,
        sex: Math.random() > 0.5 ? '男' : '女',
        age: 32 + idx
      }
    })
  ]

  const [objIdx, setObjIdx] = useState(-1)

  const handleGoTo = (i: number) => {
    setObjIdx(i)
  }

  return (
    <div>
      {objIdx >= 0 ? (
        <>
          <DiagnosePanel data={rawData[objIdx]}></DiagnosePanel>
          <Affix offsetBottom={10} className="w-full flex justify-end mt-[10px]">
            <Button type="primary" size="large" onClick={() => setObjIdx(-1)} className="mr-[15px]">
              <div className="flex justify-center items-center space-x-1">
                <ArrowLeftOutlined />
                <span>返回重新选择就诊者</span>
              </div>
            </Button>
          </Affix>
        </>
      ) : (
        <ObjectSelect data={rawData} onGoTo={handleGoTo}></ObjectSelect>
      )}
    </div>
  )
}

export default DiagnosePage
