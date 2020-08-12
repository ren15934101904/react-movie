import React from 'react';
import Loadable from 'react-loadable';
const Loading = () => <div>组件正在加载...</div>
const routes = [
    {
        path: '/',
        exact: true,
        component: () => import('../pages/nav/NavPage'),
    },
    {
        path: '/login',
        component: () => import('../pages/login/Login'),
    },
    {
        path: '/list/:title',
        component: () => import('../pages/list/List'),
        roles:['admin','subAdmin']
    },
    {
        path: '/detail',
        component: () => import('../pages/detail/Detail'),
    },
    {
        path:'/forgot',
        redirect:"/forgot/person",
    },
    {
        path: '/forgot',
       
        component: () => import('../pages/forgot/Forgot'),
        children: [
            {
                path:'/forgot/person',
                component:()=>import('../pages/detail/Detail'),
            },
            {
                path:'/forgot/good',
                component:()=> import('../pages/login/Login'),
            },
        ]
    },
]

export default handleRoute(routes);

function handleRoute(routes) {
    if (Array.isArray(routes) && routes.length) {
        return routes.map((item) => {
            if (Array.isArray(item.children)) {
                return {
                    ...item,
                    component: Loadable({
                        loader: item.component,
                        loading: Loading,
                    }),
                    children: handleRoute(item.children)
                }
            }
            return {
                ...item,
                component: Loadable({
                    loader: item.component,
                    loading: Loading,
                })
            }
        })
    }
}