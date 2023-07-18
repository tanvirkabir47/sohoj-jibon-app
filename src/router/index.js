import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Bazar from '../views/Bazar.vue'
import NoteBook from '../views/NoteBook.vue'
import Hisab from '../views/Hisab.vue'
import ageCalculator from '../views/ageCalculator.vue'
import Footer from '../views/Footer.vue'
import Coming from '../views/Coming.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component: Home,
        alias: ['/home', '/index']
    },
    {
        path:'/bazar',
        name:'bazar',
        component: Bazar
    },
    {
        path:'/notebook',
        name:'notebook',
        component: NoteBook
    },
    {
        path:'/hisab-khata',
        name:'hisab-khata',
        component: Hisab
    },
    {
        path:'/age-calculator',
        name:'age-calculator',
        component: ageCalculator
    },
    {
        path:'/footer',
        name:'footer',
        component: Footer
    },

    // coming soon page

    {
        path: '/coming',
        name: 'coming',
        component: Coming
    },

    // page not fund

    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router