import Vue from 'vue';
import VueRouter from 'vue-router';
import state from './state';

import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';
import Author from './components/Author.vue';
import BlankA from './components/BlankA.vue';
import BlankB from './components/BlankB.vue';
import BlankC from './components/BlankC.vue';
import Login from './components/Login.vue';
import TicketsLayout from './components/TicketsLayout.vue';

// Install the plugin vue-router
// for, obviously, routing between different pages
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ },
    { path: '/author', name: 'author', component: Author },
    { path: '/blank-a', name: 'blank-a', component: BlankA },
    { path: '/blank-b', name: 'blank-b', component: BlankB },
    { path: '/blank-c', name: 'blank-c', component: BlankC },
    { path: '/login', name: 'login', component: Login, meta: {guest: true} },
    { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: {private: true} },
];

const router = new VueRouter({
    routes,
    // mode for URLs without the sharp symbol #
    // mode: 'history',
});

router.beforeEach((to, from, next) => {
    // console.log('to', to.name);

    if (to.meta.private && !state.user) {
        next({
            name: 'login',
            params: {
                wantedRoute: to.fullPath,
            },
        });
        return;
    }

    if (to.meta.guest && state.user) {
        next({
            name: 'home',
        });
        return;
    }
    next();
});

export default router;
