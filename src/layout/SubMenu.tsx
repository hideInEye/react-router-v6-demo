import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import routes, { IRouter } from "@/router/router";
import { useEffect, useState } from "react";

// 将路由配置转化为 Antd Menu 的 items 结构
const getMenuItems = (routes: IRouter[]) => {
  return routes.map((route: IRouter) => {
    if (route.children) {
      return {
        key: route.key,
        label: route.name,
        children: getMenuItems(route.children),
      };
    }
    return {
      key: route.key,
      label: <Link to={route.key}>{route.name}</Link>,
    };
  });
};

const SidebarMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const defaultOpenKeys =
    localStorage.getItem("defaultOpenKeys").split(",") || [];

  const [defaultSelectKey, setKey] = useState(
    pathname.length > 1 ? pathname.substring(1) : pathname
  );
  const menuItems = getMenuItems(routes);

  useEffect(() => {
    if (pathname === "/") {
      setKey("/");
      return;
    }
    setKey(pathname.substring(1));
  }, []);
  const onSelect = (item: any) => {
    localStorage.setItem("defaultOpenKeys", item.keyPath);
  };

  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={[defaultSelectKey]}
      theme="dark"
      mode="inline"
      items={menuItems}
      onSelect={onSelect}
    />
  );
};

export default SidebarMenu;
