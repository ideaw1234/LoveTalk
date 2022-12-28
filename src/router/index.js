import {createRouter,createWebHistory} from 'vue-router'
import Home from "../component/Home.vue"
import Aboutus from '../component/Aboutus.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/about',
            component:Aboutus
        },

    ]
})
export default router