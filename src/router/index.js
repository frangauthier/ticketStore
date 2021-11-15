import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Shows from '../views/Shows.vue'
import Login from '../views/Login.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/shows',
        name: 'Shows',
        component: Shows
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }, {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log('to: ', to);
    console.log('from: ', from);
    next()
    next({ name: 'Login' })
    next('#/login')
    next({ path: '/login' })
})

export default router