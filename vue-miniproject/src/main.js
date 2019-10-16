import Vue from 'vue';
import Test from './Test.vue';
import Movies from './Movies.vue';

new Vue({
    el: '#app',
    // ...Test,
    
     // JSX style when we not need 'components:'
     render(h) {
        return <Movies />;
    }, 
});