import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: (_) => {
            return {
                path: '/home'
            }
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: ()=> import('@/pages/Home.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/404.vue')
    },
    {
        path: '/:currentPath(.*)*',
        redirect: (_) => {
            return {
                path: '/404'
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior(to, from, savePosition) {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router