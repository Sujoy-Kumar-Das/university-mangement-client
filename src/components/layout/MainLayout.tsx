import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiderLayout from "./SiderLayout";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout>
      <SiderLayout />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
