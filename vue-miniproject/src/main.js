import Vue from 'vue';
import Test from './Test.vue';
import Movies from './Movies.vue';

new Vue({
    el: '#app',
    // ...Test,
    ...Movies, 
});