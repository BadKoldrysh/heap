import 'babel-polyfill';
import Vue from 'vue';

import AppLayout from './components/AppLayout.vue';
import VueFetch, { $fetch } from './plugins/fetch';
import VueState from './plugins/state';
import './global-components';
import router from './router';
import state from './state';

import * as filters from './filters';
for (const key in filters) {
    Vue.filter(key, filters[key]);
}

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
});

Vue.use(VueState, state);

async function main() {
    // Get user info
    try {
        state.user = await $fetch('user');
    } catch (e) {
        console.warn(e);
    }
    // Launch app
    new Vue({
        el: '#app',
        data: state,
        render: h => h(AppLayout),
        // Provide the router to the app
        router,
    });
}

main();
