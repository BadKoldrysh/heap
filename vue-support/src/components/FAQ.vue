<template>
    <main class="faq">
        <h1>Frequently Asked Questions</h1>
    
        <div class="error" v-if="error">
            Can't load the question
        </div>

        <section class="list">
            <article v-for="question of questions" :key="question.title">
                <h2 v-html="question.title"></h2>
                <p v-html="question.content"></p>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            error: null,
        };
    },
    created() {
        // fetch here
    }
}
</script>