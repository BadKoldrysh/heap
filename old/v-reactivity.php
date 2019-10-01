<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue.js Reactivity</title>
</head>

<body>
    <div id="app">
        <h1>Hello Vue Reactivity</h1>
        <display-number v-bind:number="number"></display-number>
        <count-from-number v-bind:initial-number="number1"></count-from-number>
    </div>
    <script>
        Vue.component('display-number', {
            template: '<p>The number is {{ number }}</p>',
            props: {
                number: {
                    type: Number,
                    required: true,
                }
            }
        });
        Vue.component('count-from-number', {
            template: '<p>The number is {{ number }}</p>',
            props: {
                initialNumber: {
                    type: Number,
                    required: true,
                }
            },
            data() {
                return {
                    number: this.initialNumber,
                };
            },
            mounted() {
                setInterval(() => {
                    this.number++;
                }, 1000);
            }
        });
        const vm = new Vue({
            el: '#app',
            data: {
                number: 0,
                number1: 0,
            },
            created() {
                setInterval(() => {
                    this.number++;
                }, 500);
            }
        });
    </script>
</body>

</html>