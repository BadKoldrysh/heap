import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';

// Install the plugin vue-router
// for, obviously, routing between different pages
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ},
];

const router = new VueRouter({
    routes,
});

export default router;