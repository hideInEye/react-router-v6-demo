import { createRoot } from "react-dom/client";
import Myrouter from "./router";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
const root = createRoot(document.getElementById("root")!);

root.render(
  <ConfigProvider locale={zhCN}>
    <Myrouter />
  </ConfigProvider>
);
