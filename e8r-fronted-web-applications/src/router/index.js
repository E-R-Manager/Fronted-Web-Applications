import {createRouter, createWebHistory} from "vue-router";

import NotFound from "../shared/pages/notfound.component.vue"
import FormLogin from "../iam/pages/login.component.vue"

import HomeOdsComponent from "../visualization/pages/home-ods.component.vue"
import HomeClientComponent from "../visualization/pages/home-client.component.vue"
import HomeInventoryComponent from "../visualization/pages/home-inventory.component.vue"
import HomeServicesComponent from "../visualization/pages/home-services.component.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: FormLogin},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        {path: '/ods/home', component: HomeOdsComponent},
        {path: '/client/home', component: HomeClientComponent},
        {path: '/inventory/home', component: HomeInventoryComponent},
        {path: '/services/home', component: HomeServicesComponent},
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const token = localStorage.getItem('token');

    if (authRequired && !token) {
        return next('/login');
    }
    next();
});

export default router;