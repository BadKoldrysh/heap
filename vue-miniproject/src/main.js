import Vue from 'vue';

new Vue({
    el: '#app',
    render: h => h('div', {'class': 'movies'}, [
        h('li', {'class': 'movie'}, 'Star Wars'),
        h('li', {'class': 'movie'}, 'The Godfather'),
        h('li', {'class': 'movie'}, 'Blade Runner')
    ]), 
});