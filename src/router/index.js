import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Races from '../pages/Races.vue'
import Classes from '../pages/Classes.vue'
import Bestiary from '../pages/Bestiary.vue'
import Lore from '../pages/Lore.vue'
import Contact from '../pages/Contact.vue'
import skeleton from '../assets/scilet.png'



const routes = [
    { path: '/', component: Home },
    { path: '/race', component: Races },
    { path: '/class', component: Classes },
    { path: '/bestiary', component: Bestiary },
    { path: '/lore', component: Lore },
    { path: '/contact', component: Contact },
]


export default createRouter({
    history: createWebHistory(),
    routes
})