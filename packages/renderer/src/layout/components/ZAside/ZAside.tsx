import {
  ForkOutlined,
  HomeOutlined,
  MobileOutlined,
  ReconciliationOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const { Header } = Layout

const ZAside = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Layout>
      <Header className="!px-[10px]  text-center !leading-none !h-[100px] border-b-[1px] border-gray-500 !py-[20px]">
        <h1 className="!text-white text-lg">缺血性脑卒中</h1>
        <h2 className="!text-white text-lg">辅助诊断医疗系统</h2>
      </Header>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={(e) => {
          console.log(e)
          navigate(e.key)
        }}
        items={[
          { label: '数据概况', icon: <HomeOutlined />, key: '/analysis' },
          { label: '设备管理', icon: <MobileOutlined />, key: '/device' },
          { label: '病情诊断', icon: <ForkOutlined />, key: '/diagnose' },
          { label: '诊断记录', icon: <ReconciliationOutlined />, key: '/record' },
          {
            label: '系统管理',
            key: '/management',
            icon: <SettingOutlined />,
            children: [
              {
                label: '用户管理',
                key: '/management/user'
              },
              {
                label: '权限管理',
                key: '/management/permission'
              },
              {
                label: '日志管理',
                key: '/management/log'
              }
            ]
          }
        ]}
      />
    </Layout>
  )
}

export default ZAside
