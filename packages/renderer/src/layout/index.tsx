import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import ZAside from './components/ZAside/ZAside';
import ZHeader from './components/ZHeader/ZHeader';
const { Header, Sider, Content } = Layout;

const ZLayout = () => {
  const route = useNavigate();

  return (
    <Layout className="layout fixed top-0 bottom-0 left-0 right-0">
      <Sider width={170}>
        <ZAside />
      </Sider>
      <Layout>
        <ZHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ZLayout;
