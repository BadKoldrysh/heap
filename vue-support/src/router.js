import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';
import Author from './components/Author.vue';

// Install the plugin vue-router
// for, obviously, routing between different pages
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ},
    { path: '/author', name: 'author', component: Author}
];

const router = new VueRouter({
    routes,
    // mode for URLs without the sharp symbol #
    // mode: 'history',
});

export default router;