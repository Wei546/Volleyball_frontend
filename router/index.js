import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/components/HomePage.vue'
import AboutPage from '../src/components/AboutPage.vue'
import AccountPage from '../src/components/AccountPage.vue'
import AnalysisPage from '../src/components/AnalysisPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/account',
            name: 'account',
            component: AccountPage
        },
        {
            path: '/analysis',
            name: 'analysis',
            component: AnalysisPage
        }
    ]
})

export default router