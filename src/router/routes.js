import home from './home'; // 首页
// 不需要动态判断权限
const constantRoutes = [
    {
        path: '/',
        redirect: {
          path: '/home/index'
        }
      },
      {
        path: '/serverError',
        name: 'serverError',
        component: () => import('views/errorPage/serverError'),
      },
      {
        path: '*',
        name: '404',
        component: () => import('views/errorPage/serverError'),
      },
];
// 需求动态判断权限并通过addRoutes 动态添加的页面
const asyncRoutes = [
    ...home, // 首页模块
];

const routes = [...constantRoutes, ...asyncRoutes];
export default [...routes];