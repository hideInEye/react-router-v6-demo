import { Layout } from 'antd';
const { Sider, Content } = Layout;
import { Outlet } from 'react-router-dom';
import SubMenu from '@/layout/SubMenu';

export default function Context() {
  return (
    <Layout>
      <Sider>
        <SubMenu />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
