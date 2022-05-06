import { getRouteTitle } from '@/router'
import { rmToken } from '@/utils/store'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const ZHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    rmToken()
    message.warn('已退出登录！')
    navigate('/login')
  }

  return (
    <div className="!bg-white">
      <div className="flex justify-between items-center px-5 min-h-[60px]">
        <div className="text-[18px]">{getRouteTitle(location.pathname)}</div>
        <div className="flex flex-col items-end">
          <Dropdown
            overlay={
              <Menu items={[{ label: '退出登录', key: 'logout', onClick: handleLogout }]}></Menu>
            }>
            <div className="cursor-pointer">
              xxx医生&nbsp;
              <DownOutlined />
            </div>
          </Dropdown>
          <div>设备1</div>
        </div>
      </div>
    </div>
  )
}

export default ZHeader
