import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const QuickOperation = () => {
  const navigate = useNavigate()

  return (
    <div className="flex space-x-4">
      <Button onClick={() => navigate('/diagnose')}>病情诊断</Button>
      <Button onClick={() => navigate('/record')}>诊断记录</Button>
    </div>
  )
}

export default QuickOperation
