import { Layout } from 'antd';
import MyHeader from './header';
import Context from './context';

export default function layout() {
  return (
    <Layout>
      <MyHeader />
      <Context />
    </Layout>
  );
}
