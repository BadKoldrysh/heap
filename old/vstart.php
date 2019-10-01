<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js script</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue</h1>
        <button @click="divVisible = !divVisible">Toggle visibility</button>
        <transition name="fade">
            <div v-if="divVisible">This content is sometimes hidden</div>
        </transition>
    </div>
    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                divVisible: true,
            },
        });
    </script>
    <style>
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
    </style>
</body>

</html>