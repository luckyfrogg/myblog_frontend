/**
 * 在主框架内显示
 */
const frameIn = [
    // 欢迎页
    {
        path: '/',
        component: () => import('@/pages/welcome'),
        redirect: { name: 'Welcome' },
        meta: { title: '胡橙汁的个人博客', requiresAuth: true },
        children: [
            {
                path: 'welcome',
                name: "Welcome",
                component: () => import('@/pages/welcome'),
                meta: { title: '胡橙汁的个人博客', requiresAuth: true },
            }
        ]
    },
    {
        path: '/home',
        name: "Home",
        component: () => import('@/pages/home'),
        redirect: { name: 'Timeline' },
        meta: { title: '胡橙汁的个人博客', requiresAuth: true },
        children: [
            {
                path: '/timeline',
                name: "Timeline",
                component: () => import('@/pages/timeline'),
                meta: { title: '胡橙汁的个人博客', requiresAuth: true }
            },
            {
                path: '/tag',
                name: "Tag",
                component: () => import('@/pages/tag'),
                meta: { title: '胡橙汁的个人博客', requiresAuth: true }
            },
            {
                path: '/cate',
                name: "Cate",
                component: () => import('@/pages/cate'),
                meta: { title: '胡橙汁的个人博客', requiresAuth: true }
            },
        ]
    },
    {
        path: '/detail/:id',
        name: "Detail",
        component: () => import('@/pages/detail'),
        meta: { title: '胡橙汁的个人博客', requiresAuth: true }
    }

]

/**
 * 错误页面
 */
const errorPage = [
    // 404
    {
        path: '*',
        name: 'Page404',
        component: () => import('@/pages/common/page404'),
        meta: { title: '胡橙汁的个人博客-404' }
    }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
]

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut,
    ...errorPage
]
