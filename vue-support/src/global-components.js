/**
 * This is the file where we will register all the global components used
 * across all the application.
 */

import Vue from 'vue';
import Loading from './components/Loading.vue';
import SmartForm from './components/SmartForm.vue';

Vue.component('Loading', Loading);
Vue.component('SmartForm', SmartForm);