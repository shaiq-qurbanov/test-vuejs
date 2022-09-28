
import { createRouter, createWebHistory } from 'vue-router'
// import Test from '../pages/Test.vue'
import Welcome from '../components/Welcome'
const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    // {
    //     path: '/Test',
    //     name: 'Test',
    //     component: Test
    // }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
