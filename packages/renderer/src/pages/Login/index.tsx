import { Button, Card, Divider, Form, Image, Input, message } from 'antd'
import { useState } from 'react'
import { setToken } from '@/utils/store'
import { useNavigate } from 'react-router-dom'
import ImgLoginAside from '@/assets/login-aside.png'
import ImgIcon from '@/assets/icon.png'

const LoginPage = () => {
  const [username, setUserName] = useState('abc')
  const [password, setPassword] = useState('123456')

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!username || !password) {
      message.error('请输入账号和密码！')
      return
    }
    if (!(username === 'abc' && password === '123456')) {
      message.error('账号或密码错误')
      return
    }
    setToken('token')
    message.success('登录成功！')
    navigate('/', { replace: true })
  }

  return (
    <div className="page-login flex w-screen h-screen bg-[#f4f6f9]">
      <Card className="w-[500px] h-[746px]">
        <header className="flex">
          <img src={ImgIcon} width="120" height="80" className="mr-[20px]" />
          <div className="flex flex-col text-center items-center">
            <h1 className="text-[30px]">缺血性脑卒中</h1>
            <h1 className="text-[36px]">辅助诊断系统</h1>
          </div>
        </header>
        <Divider />
        <Form layout="vertical" size="large">
          <Form.Item label="账号">
            <Input
              placeholder="请输入账号"
              value={username}
              onChange={(e) => setUserName(e.target.value)}></Input>
          </Form.Item>
          <Form.Item label="密码">
            <Input
              placeholder="请输入密码"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}></Input>
          </Form.Item>
          <Button type="primary" onClick={handleSubmit} size="large" block>
            登录
          </Button>
        </Form>
      </Card>
      <div className="h-screen flex-1">
        <img src={ImgLoginAside} className="h-full w-fukk" />
      </div>
    </div>
  )
}

export default LoginPage
