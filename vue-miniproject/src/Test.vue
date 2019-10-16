<template lang="pug">
div
    p {{ message }}
    input(type='text', v-model='message')
    ul.movies
        li.movie {{ movies[0].title }}
        li.movie {{ movies[1].title }}
        li.movie {{ movies[2].title }}

</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
            movies: [
                { title: 'Star Wars' },
                { title: 'The Godfather' },
                { title: 'Blade Runner' },
            ]
        };
    },
}
</script>

<style>
p {
    color: grey;
}
</style>