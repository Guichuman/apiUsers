import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterUser from "../views/RegisterUser.vue"
import LoginUser from "../views/LoginUser.vue"
import UsersView from "../views/UsersView.vue"
import axios from 'axios'


function AdminAuth(to, from, next) {
    if (localStorage.getItem('token') != undefined) {

        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.post("http://localhost:8081/validate", req).then(res => {
            console.log(res)
            next()
        }).catch(err => {
            console.log(err)
            next("/login")
        })
    } else {
        next("/login")
    }
}
const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/registerUser',
        name: 'registerUser',
        component: RegisterUser
    },
    {
        path: '/login',
        name: 'loginUser',
        component: LoginUser
    },
    {
        path: '/users',
        name: 'usersView',
        component: UsersView,
        beforeEnter: AdminAuth
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router