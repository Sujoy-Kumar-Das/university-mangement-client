import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";

const { Sider } = Layout;

export default function SiderLayout() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", paddingTop: "2rem" }}
    >
      <div
        className="demo-logo-vertical"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        items={sidebarItemGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
}
