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
    render(h) {
        const itemClass = 'movie';
        return <ul class='movies'>
                {this.movies.map(movie => 
                    <li class={ itemClass }>{ movie.title }</li>)}
            </ul>
    },
}
</script>

<style>
p {
    color: grey;
}

.movies {
    list-style: none;
    padding: 12px;
    background: rgba(0, 250, 0, .1);
    border-radius: 3px;
}
</style>

<style scoped>
.movie:not(:last-child) {
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: solid 1px rgba(0, 0, 0, .1);
}
</style>