import { getRouteTitle } from '@/router'
import { useLocation } from 'react-router-dom'

const ZHeader = () => {
  const location = useLocation()

  return (
    <div className="!bg-white">
      <div className="flex justify-between items-center px-5 min-h-[60px]">
        <div className="text-[18px]">{getRouteTitle(location.pathname)}</div>
        <div className="flex flex-col items-end">
          <div>xxx医生</div>
          <div>设备1</div>
        </div>
      </div>
    </div>
  )
}

export default ZHeader
