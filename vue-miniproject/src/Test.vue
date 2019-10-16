<template lang="pug">
div
    p {{ message }}
    input(type='text', v-model='message')
    ul.movies
        li.movie Star Wars
        li.movie The Godfather
        li.movie Blade Runner

</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
        };
    },
}
</script>

<style>
p {
    color: grey;
}
</style>