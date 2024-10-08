export interface IRouter {
  name: string;
  key?: string;
  type?: string;
  children?: IRouter[];
}

const router = [
  {
    name: "首页",
    key: "/",
  },
  {
    name: "菜品",
    key: "dish",
    type: "group",
    children: [
      {
        name: "菜品管理",
        key: "dish/manager",
      },
    ],
  },
];

export default router;
