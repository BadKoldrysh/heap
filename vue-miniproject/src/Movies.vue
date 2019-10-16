<template lang="pug">
ul
    Movie(v-for="movie of movies" :key="movie.id" :movie="movie") {{ movie.title }}

</template>

<script>
import Movie from './Movie.vue';

export default {
    components: {
        Movie,
    },
    data() {
        return {
            movies: [
                { id: 0, title: 'Star Wars' },
                { id: 1, title: 'The Punisher' },
                { id: 2, title: 'Jurassic Park' },
            ],
        };
    },
}
</script>