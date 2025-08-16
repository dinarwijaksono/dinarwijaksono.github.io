import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './page/Home.vue'
import About from './page/About.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
