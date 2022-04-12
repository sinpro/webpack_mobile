export default [
    {
        path: '/home/login',
        name: 'Login',
        component: resolve =>
            require.ensure(
                [],
                () => resolve(require('views/home/login.vue')),
            ),
        meta: {
            title: '登录'
        },
    },
    {
        path: '/home/index',
        name: 'Home',
        component: resolve =>
            require.ensure(
                [],
                () => resolve(require('views/home/index.vue')),
            ),
        meta: { title: '首页'},
    }

]