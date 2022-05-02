import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import ZAside from './components/ZAside/ZAside';
import ZHeader from './components/ZHeader/ZHeader';
import './index.scss';

const { Sider, Content } = Layout;

const ZLayout = () => {
  const route = useNavigate();

  return (
    <Layout className="layout fixed top-0 bottom-0 left-0 right-0">
      <Sider width={170}>
        <ZAside />
      </Sider>
      <Layout>
        <ZHeader />
        <Content className="p-[10px]" id="main-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ZLayout;
