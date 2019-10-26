import 'babel-polyfill';
import Vue from 'vue';
import AppLayout from './components/AppLayout.vue';
import router from './router';
import './global-components';
import VueFetch from './plugins/fetch';
import state from './state';

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
});

new Vue({
    el: '#app',
    data: state,
    render: h => h(AppLayout),
    // Provide the router to the app
    router,
});